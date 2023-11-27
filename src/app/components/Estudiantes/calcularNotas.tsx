'use client'
import React from 'react';
import useGestionEstudiantes from '../data/useGestionEstudiantes';
import FormularioEstudiante from './formularioEstudiante';
import Resultado from '../Resultado/resultado';

const CalcularNotas: React.FC = () => {
    const {
        nombre,
        notaPrimerParcial,
        notaSegundoParcial,
        estudiantes,
        editando,
        setNombre,
        setNotaPrimerParcial,
        setNotaSegundoParcial,
        agregarEstudiante,
        editarEstudiante,
        eliminarEstudiante,
    } = useGestionEstudiantes();

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
           
            <Resultado estudiantes={estudiantes} onEditar={editarEstudiante} onEliminar={eliminarEstudiante} />
        </div>
    );
};

export default CalcularNotas;