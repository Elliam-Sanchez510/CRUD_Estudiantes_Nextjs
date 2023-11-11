'use client'

import React from 'react';

const CRUDEstudiantes: React.FC<{
    estudiantes: Estudiante[];
    onEditar: (id: number) => void;
    onEliminar: (id: number) => void;
}> = ({ estudiantes, onEditar, onEliminar }) => {
    return (
        <div>
            {/* Renderizar la lista de estudiantes y botones de editar y eliminar */}
            {estudiantes.map(estudiante => (
                <div key={estudiante.id}>
                    <p>{estudiante.nombre}</p>
                    <p>{estudiante.notaFinal}</p>
                    <button onClick={() => onEditar(estudiante.id)}>Editar</button>
                    <button onClick={() => onEliminar(estudiante.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CRUDEstudiantes;
