// FormularioEstudiante.tsx
import React from 'react';

const FormularioEstudiante: React.FC<{
    nombre: string;
    notaPrimerParcial: number;
    notaSegundoParcial: number;
    onNombreChange: (value: string) => void;
    onNotaPrimerParcialChange: (value: number) => void;
    onNotaSegundoParcialChange: (value: number) => void;
    onAgregarEstudiante: () => void;
    editando: boolean;
}> = ({ nombre, notaPrimerParcial, notaSegundoParcial, onNombreChange, onNotaPrimerParcialChange, onNotaSegundoParcialChange, onAgregarEstudiante, editando }) => {
    return (
        <div className="mb-4 flex items-center">
            <input
                type="text"
                placeholder="Nombre del estudiante"
                value={nombre}
                onChange={(e) => onNombreChange(e.target.value)}
                className="mr-2 px-2 py-1 border border-gray-300 rounded"
            />
            <input
                type="number"
                placeholder="Nota del primer parcial"
                value={notaPrimerParcial}
                onChange={(e) => onNotaPrimerParcialChange(parseFloat(e.target.value))}
                className="mr-2 px-2 py-1 border border-gray-300 rounded"
            />
            <input
                type="number"
                placeholder="Nota del segundo parcial"
                value={notaSegundoParcial}
                onChange={(e) => onNotaSegundoParcialChange(parseFloat(e.target.value))}
                className="mr-2 px-2 py-1 border border-gray-300 rounded"
            />
            <button
                onClick={onAgregarEstudiante}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                {editando ? 'Editar' : 'Agregar'}
            </button>
        </div>
    );
};

export default FormularioEstudiante;
