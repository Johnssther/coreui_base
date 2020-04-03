import React from 'react';
import { useField } from 'formik';

const InputField = ({ label, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.trim().length > 2) || meta.touched;

    return (
        <div className="form-group">
            <label htmlFor={field.name}>{label}</label>
                <input 
                    className={`form-control ${showFeedback ? (meta.error ? "is-invalid" : "is-valid") : ""}` } 
                    {...field}
                    {...props}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onClick={ ()=>{ console.log('fg') } }
                />
                <div className={ `valid-feedback` }>
                    Completado
                </div>
                <div className={ `invalid-feedback` }>
                    {meta.error}
                </div>
        </div>
    );

};
export default InputField