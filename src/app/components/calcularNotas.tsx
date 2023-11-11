'use client'
import React, { useState } from 'react';
import Resultado from './resultado';

const CalcularNotas: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [notaPrimerParcial, setNotaPrimerParcial] = useState<number>(0);
    const [notaSegundoParcial, setNotaSegundoParcial] = useState<number>(0);
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
    const [editando, setEditando] = useState<boolean>(false);
    const [idEditando, setIdEditando] = useState<number | null>(null);

    const agregarEstudiante = () => {
        if (nombre && notaPrimerParcial && notaSegundoParcial) {
            const notaFinal = (notaPrimerParcial + notaSegundoParcial) / 2;
            const nuevoEstudiante: Estudiante = {
                id: new Date().getTime(),
                nombre,
                notaPrimerParcial,
                notaSegundoParcial,
                notaFinal,
                aprobado: notaFinal >= 60 ? 'Aprobado' : 'Reprobado',
            };

            if (editando && idEditando !== null) {
                const estudiantesActualizados = estudiantes.map(estudiante =>
                    estudiante.id === idEditando ? nuevoEstudiante : estudiante
                );
                setEstudiantes(estudiantesActualizados);
                setEditando(false);
                setIdEditando(null);
            } else {
                setEstudiantes([...estudiantes, nuevoEstudiante]);
            }

            setNombre('');
            setNotaPrimerParcial(0);
            setNotaSegundoParcial(0);
        } else {
            alert('Por favor, ingresa el nombre, la nota del primer parcial y la nota del segundo parcial.');
        }
    };

    const editarEstudiante = (id: number) => {
        const estudianteEditar = estudiantes.find(estudiante => estudiante.id === id);
        if (estudianteEditar) {
            setNombre(estudianteEditar.nombre);
            setNotaPrimerParcial(estudianteEditar.notaPrimerParcial);
            setNotaSegundoParcial(estudianteEditar.notaSegundoParcial);
            setEditando(true);
            setIdEditando(id);
        }
    };

    const eliminarEstudiante = (id: number) => {
        const estudiantesActualizados = estudiantes.filter(estudiante => estudiante.id !== id);
        setEstudiantes(estudiantesActualizados);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">CRUD de Estudiantes</h1>

            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Nombre del estudiante"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="mr-2 px-2 py-1 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    placeholder="Nota del primer parcial"
                    value={notaPrimerParcial}
                    onChange={(e) => setNotaPrimerParcial(parseFloat(e.target.value))}
                    className="mr-2 px-2 py-1 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    placeholder="Nota del segundo parcial"
                    value={notaSegundoParcial}
                    onChange={(e) => setNotaSegundoParcial(parseFloat(e.target.value))}
                    className="mr-2 px-2 py-1 border border-gray-300 rounded"
                />
                <button
                    onClick={agregarEstudiante}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    {editando ? 'Editar' : 'Agregar'}
                </button>
            </div>

            <Resultado estudiantes={estudiantes} onEditar={editarEstudiante} onEliminar={eliminarEstudiante} />
        </div>
    );
};

export default CalcularNotas;
