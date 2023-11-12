// useGestionEstudiantes.ts
import { useState } from 'react';

const useGestionEstudiantes = () => {
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
                const estudiantesActualizados = estudiantes.map((estudiante) =>
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
        const estudianteEditar = estudiantes.find((estudiante) => estudiante.id === id);
        if (estudianteEditar) {
            setNombre(estudianteEditar.nombre);
            setNotaPrimerParcial(estudianteEditar.notaPrimerParcial);
            setNotaSegundoParcial(estudianteEditar.notaSegundoParcial);
            setEditando(true);
            setIdEditando(id);
        }
    };

    const eliminarEstudiante = (id: number) => {
        const estudiantesActualizados = estudiantes.filter((estudiante) => estudiante.id !== id);
        setEstudiantes(estudiantesActualizados);
    };

    return {
        nombre,
        notaPrimerParcial,
        notaSegundoParcial,
        estudiantes,
        editando,
        idEditando,
        setNombre,
        setNotaPrimerParcial,
        setNotaSegundoParcial,
        agregarEstudiante,
        editarEstudiante,
        eliminarEstudiante,
    };
};

export default useGestionEstudiantes;
