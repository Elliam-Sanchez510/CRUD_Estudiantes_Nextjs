'use client'
import React from 'react';

interface CRUDEstudiantesProps {
    estudiantes: Estudiante[]
    onEditar: (id: number) => void;
    onEliminar: (id: number) => void;
}

const CRUDEstudiantes: React.FC<CRUDEstudiantesProps> = ({ estudiantes, onEditar, onEliminar }) => {
    return (
        <div>
            {/* Renderizar la lista de estudiantes y botones de editar y eliminar */}
            {estudiantes.map((estudiante) => (
                <div key={estudiante.id}>
                    {/* ... (código de la lista y botones) */}
                    <button onClick={() => onEditar(estudiante.id)}>Editar</button>
                    <button onClick={() => onEliminar(estudiante.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CRUDEstudiantes;