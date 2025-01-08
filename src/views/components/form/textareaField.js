import React from 'react';
import { useField } from 'formik';

const TextareaField = ({ label, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.length > 2) || meta.touched;

    return (
        <div className="form-group">
            <label htmlFor={field.name}>{label}</label>
            <textarea
                className={`form-control sm ${showFeedback ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                {...field}
                {...props}
                placeholder={placeholder}
                onFocus={handleFocus}
            />
            <div className="valid-feedback">
                Completado
            </div>
            <div className="invalid-feedback">
                {meta.error}
            </div>
        </div>
    );
};

export default TextareaField;
