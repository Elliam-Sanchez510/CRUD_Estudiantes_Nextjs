'use client'
import React from 'react';

interface Estudiante {
    id: number;
    nombre: string;
    notaPrimerParcial: number;
    notaSegundoParcial: number;
    notaFinal: number;
    aprobado: string;
}

interface ResultadoProps {
    estudiantes: Estudiante[];
    onEditar: (id: number) => void;
    onEliminar: (id: number) => void;
}

const Resultado: React.FC<ResultadoProps> = ({ estudiantes, onEditar, onEliminar }) => {
    return (
        <div className="my-4">
            <h2 className="text-2xl font-bold mb-2">Resultados:</h2>
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
                                <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-700" onClick={() => onEditar(estudiante.id)}>Editar</button>
                                <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700" onClick={() => onEliminar(estudiante.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Resultado;