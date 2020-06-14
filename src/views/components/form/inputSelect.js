import React from 'react';
import { useField } from "formik";
import Select from 'react-select'

const InputSelect = ({ label, expensestype, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const { setValue } = helpers;
    const { value } = meta;

    // value deault
    const valueDefaultexpensestype = expensestype.find((item) => {
        if (item.value === value) {
            return item;
        }
    })
    console.log(expensestype, 'expensestype STEFFY');
    
    return (
        <>
            <label htmlFor={field.name}>{label}</label>
            <Select
                className="is-invalid"
                options={expensestype}
                onChange={(newValue) => { setValue(newValue.value); }}
                value={valueDefaultexpensestype}
            />
            <div className={`valid-feedback`}>
                Completado
            </div>
            <div className={`invalid-feedback`}>
                {meta.error}
            </div>

            {meta.touched && meta.error ? (
                <small className="form-text text-danger">{meta.error}</small>
            ) : null}
        </>
    );
};

export default InputSelect;