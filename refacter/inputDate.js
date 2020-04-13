import React, { useState } from 'react';
import { useField } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({ label, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.trim().length > 2) || meta.touched;

    const [startDate, setStartDate] = useState(new Date());

    const convDate = (date) => {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }
    console.log(convDate(startDate));

    return (
        <div className="form-group">
            <label htmlFor={field.name}>{label}</label>
            <DatePicker
                className={`form-control ${showFeedback ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                name="fecha"
                value={startDate}
                selected={startDate}
                onChange={date => setStartDate(date)}

            />
            {/* <input
                className={`form-control ${showFeedback ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                {...field}
                {...props}
                placeholder={placeholder}
                onFocus={handleFocus}
            /> */}
            <div className={`valid-feedback`}>
                Completado
                </div>
            <div className={`invalid-feedback`}>
                {meta.error}
            </div>
        </div>
    );

};
export default InputDate

/* 
<DatePicker
className={`form-control ${startDate == null ? 'is-invalid' : 'is-valid'}`}
showPopperArrow={false}
name="fecha"
selected={startDate}
onChange={date => setStartDate(date)}
/> */