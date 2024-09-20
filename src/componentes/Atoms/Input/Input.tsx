import React from 'react';

/**
 *  Input reutilizable
 *  @param {string} name - Define el name del input
 *  @param {string} type - Define el type del input
 *  @param {string} placeholder - Define el valor de ejemplo para el placeholder
 *  @param {string} value - Define el valor del input
 *  @param {function} onChange - Funcion onChange
 */

interface InputTypeProps {
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputTypeProps> = ({
    name,
    type,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;