'use client'
import React from 'react';

interface BotonAgregarEditarProps {
    onClick: () => void;
    editando: boolean;
}

const BotonAgregarEditar: React.FC<BotonAgregarEditarProps> = ({ onClick, editando }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
            {editando ? 'Editar' : 'Agregar'}
        </button>
    );
};

export default BotonAgregarEditar;