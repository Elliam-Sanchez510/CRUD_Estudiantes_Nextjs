'use client'
import React from 'react';

interface InputTextoProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const InputTexto: React.FC<InputTextoProps> = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mr-2 px-2 py-1 border border-gray-300 rounded"
        />
    );
};

export default InputTexto;