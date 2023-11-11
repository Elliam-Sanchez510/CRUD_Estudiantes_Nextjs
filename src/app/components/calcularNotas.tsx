'use client'
import React, { useState } from 'react';
import Resultado from './resultado';
import FormularioEstudiante from './formularioEstudiante';
import CRUDEstudiantes from './crudEstudiante';

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

            <FormularioEstudiante
                nombre={nombre}
                notaPrimerParcial={notaPrimerParcial}
                notaSegundoParcial={notaSegundoParcial}
                onNombreChange={setNombre}
                onNotaPrimerParcialChange={setNotaPrimerParcial}
                onNotaSegundoParcialChange={setNotaSegundoParcial}
                onAgregarEstudiante={agregarEstudiante}
                editando={editando}
            />

            <CRUDEstudiantes
                estudiantes={estudiantes}
                onEditar={editarEstudiante}
                onEliminar={eliminarEstudiante}
            />

            <Resultado estudiantes={estudiantes} onEditar={editarEstudiante} onEliminar={eliminarEstudiante} />
        </div>
    );
};

export default CalcularNotas;
