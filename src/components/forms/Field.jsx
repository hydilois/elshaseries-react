import React from 'react';

const Field = ({ name, label = "", value, onChange, placeholder = "", type = "text", error = "", required = "" }) => {
    return (
        <div className="form-group">

            {label !== "" && <label htmlFor={name}>{label}</label>}
            <input
                onChange={onChange}
                value={value}
                placeholder={placeholder || label}
                type={type}
                name={name}
                className={error && " is-invalid"}
                id={name}
                required={required}
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    )

}
export default Field
