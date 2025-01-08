import React, { useState } from 'react';
import storage from '../../../firebase/firebase.config';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

const File = ({ onFileUploadComplete }) => {
    const [files, setFiles] = useState([]);
    const [deletingFile, setDeletingFile] = useState(null);

    const handleFileUpload = (e) => {
        const selectedFiles = Array.from(e.target.files);

        selectedFiles.forEach((file) => {
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            const newFile = {
                name: file.name,
                progress: 0,
                url: null,
                path: `files/${file.name}`,
                status: 'Uploading',
            };

            setFiles((prev) => [...prev, newFile]);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setFiles((prev) =>
                        prev.map((f) =>
                            f.name === file.name ? { ...f, progress, status: 'Uploading' } : f
                        )
                    );
                },
                (error) => {
                    console.error('Error during upload:', error);
                    setFiles((prev) =>
                        prev.map((f) =>
                            f.name === file.name ? { ...f, status: 'Error' } : f
                        )
                    );
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setFiles((prev) =>
                            prev.map((f) =>
                                f.name === file.name
                                    ? { ...f, progress: 100, url: downloadURL, status: 'Completed' }
                                    : f
                            )
                        );

                        // Llama al callback con la URL del archivo subido
                        if (onFileUploadComplete) {
                            onFileUploadComplete(downloadURL);
                        }
                    });
                }
            );
        });
    };

    const confirmDelete = (file) => {
        setDeletingFile(file);
    };

    const handleDelete = () => {
        const fileToDelete = deletingFile;
        if (!fileToDelete) return;

        const fileRef = ref(storage, fileToDelete.path);
        deleteObject(fileRef)
            .then(() => {
                setFiles((prev) => prev.filter((f) => f.path !== fileToDelete.path));
                setDeletingFile(null);
            })
            .catch((error) => {
                console.error('Error deleting file:', error);
            });
    };

    const cancelDelete = () => {
        setDeletingFile(null);
    };

    return (
        <div className="container mt-2 mb-2">
            <div className="custom-file mb-3">
                <input
                    type="file"
                    className="custom-file-input"
                    id="formFiles"
                    multiple
                    onChange={handleFileUpload}
                />
                <label className="custom-file-label" htmlFor="formFiles">
                    Selecciona uno o más archivos...
                </label>
            </div>

            <div className="list-group mt-2">
                {files.map((file, index) => (
                    <div key={index} className="list-group-item d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">
                            <a
                                href={file.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                {file.name}
                            </a>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => confirmDelete(file)}
                                disabled={file.status === 'Uploading'}
                            >
                                Eliminar
                            </button>
                        </div>
                        
                        <div className="mt-2">
                            <div className="progress" style={{ height: '8px' }}>
                                <div
                                    className={`progress-bar ${
                                        file.status === 'Error' ? 'bg-danger' : 'bg-success'
                                    }`}
                                    role="progressbar"
                                    style={{ width: `${file.progress}%` }}
                                >
                                    {file.status === 'Uploading' ? (
                                        <span>{file.progress.toFixed(0)}%</span>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                            <small className="text-muted">{file.status}</small>
                        </div>
                    </div>
                ))}
            </div>

            {deletingFile && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmar eliminación</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={cancelDelete}
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>¿Estás seguro de que deseas eliminar {deletingFile.name}?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleDelete}
                                >
                                    Eliminar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={cancelDelete}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default File;
