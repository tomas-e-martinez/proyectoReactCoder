import React from "react";
import './styles.css'

const Input = ({
    placeholder, 
    type='text', 
    id, 
    required=false,
    name,
    onBlur,
    onFocus,
    onChange,
    value,
    className,
}) => {
    return (
        <div className={className}>
            <input className="input"
                id={id}
                placeholder={placeholder}
                type={type}
                required={required}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
            />
            <label className="labelInput" htmlFor={id}>
                {name}
            </label>
        </div>
    )
}

export default Input;