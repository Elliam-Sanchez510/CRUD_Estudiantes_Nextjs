'use client'
import React from 'react';

interface InputNumeroProps {
    placeholder: string;
    value: number;
    onChange: (value: number) => void;
}

const InputNumero: React.FC<InputNumeroProps> = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="number"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="mr-2 px-2 py-1 border border-gray-300 rounded"
        />
    );
};

export default InputNumero;