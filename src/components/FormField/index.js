import React from "react";
import Input from "./Input";

function FormField({ label, type, name, value, onChange }) {
    return (
        <div>
            <label>
                {label}:
                <Input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;