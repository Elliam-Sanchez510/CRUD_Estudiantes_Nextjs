'use client'

import React from 'react';
import TablaEstudiantes from './tablaEstudiantes';

interface ResultadoProps {
    estudiantes: Estudiante[];
    onEditar: (id: number) => void;
    onEliminar: (id: number) => void;
}

const Resultado: React.FC<ResultadoProps> = ({ estudiantes, onEditar, onEliminar }) => {
    return (
        <div className="my-4">
            <h2 className="text-2xl font-bold mb-2">Resultados:</h2>
            <TablaEstudiantes estudiantes={estudiantes} onEditar={onEditar} onEliminar={onEliminar} />
        </div>
    );
};

export default Resultado;