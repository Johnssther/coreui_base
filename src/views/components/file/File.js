import React, { useState } from 'react'
import storage from '../../../firebase/firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const File = () => {
    const [progress, setProgress] = useState(0);
    const [files, setFiles] = useState([]);
    const setSelectedFile = (e) => {
        const file = e.target.files[0];
        const storageRefoooooo = ref(storage, 'files/' + file.name);

        const uploadTask = uploadBytesResumable(storageRefoooooo, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setProgress(progress)
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    const newfile = {
                        name: file.name,
                        url: downloadURL
                    }
                    files.push(newfile)
                    setFiles(files)
                    setProgress(0)
                });
            })
    }
    return (
        <div className="container mt-2 mb-2">
            <div class="custom-file mb-3">
                <input type="file" class="custom-file-input" id="formFile" onChange={(e) => setSelectedFile(e)}></input>
                <label class="custom-file-label" htmlFor="formFile">Buscar... (copia y pega dentro del campo url el link generado mas abajo)</label>
            </div>

            {
                progress === 0 ? null :
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: progress + '%' }} aria-valuenow="25" aria-valuemin={progress} aria-valuemax="100">{progress.toFixed(0)}%</div>
                    </div>
            }
            <div className="list-group mt-2">
                {
                    files?.map((item, index) => {
                        return (
                            <>
                                <a key={index} href={item.url} target="_blank" className="list-group-item list-group-item-action">{item.name}</a>
                                <p>{item.url}</p>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default File