import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useField } from "formik";

const InputCheckbox = ({ label, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <div className="col-sm-12">
                <label htmlFor={field.name}>{label}</label>
                <div className="form-check">
                    <Checkbox
                        color="primary"
                        className={`form-check-input ${meta.touched && meta.error ? 'is-invalid' : 'is-valid'}`}
                        {...field}
                        {...props}
                    />
                    {meta.touched && meta.error ? (
                        <div className="invalid-feedback">{meta.error}</div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default InputCheckbox