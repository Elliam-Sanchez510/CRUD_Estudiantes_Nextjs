'use client'
import React from 'react';

interface TablaEstudiantesProps {
    estudiantes: Estudiante[];
    onEditar: (id: number) => void;
    onEliminar: (id: number) => void;
}

const TablaEstudiantes: React.FC<TablaEstudiantesProps> = ({ estudiantes, onEditar, onEliminar }) => {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="border px-4 py-2">Nombre</th>
                    <th className="border px-4 py-2">Primer Parcial</th>
                    <th className="border px-4 py-2">Segundo Parcial</th>
                    <th className="border px-4 py-2">Nota Final</th>
                    <th className="border px-4 py-2">Resultado</th>
                    <th className="border px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {estudiantes.map((estudiante) => (
                    <tr key={estudiante.id}>
                        <td className="border px-4 py-2">{estudiante.nombre}</td>
                        <td className="border px-4 py-2">{estudiante.notaPrimerParcial}</td>
                        <td className="border px-4 py-2">{estudiante.notaSegundoParcial}</td>
                        <td className="border px-4 py-2">{estudiante.notaFinal}</td>
                        <td className="border px-4 py-2">{estudiante.aprobado}</td>
                        <td className="border px-4 py-2">
                            <button
                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                                onClick={() => onEditar(estudiante.id)}
                            >
                                Editar
                            </button>
                            <button
                                className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                                onClick={() => onEliminar(estudiante.id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TablaEstudiantes;