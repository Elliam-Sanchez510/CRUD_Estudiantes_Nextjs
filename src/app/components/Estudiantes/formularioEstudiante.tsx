'use client'
import React from 'react';
import InputTexto from './inputTexto';
import InputNumero from './inputNumber';
import BotonAgregarEditar from './buttons';

interface FormularioEstudianteProps {
    nombre: string;
    notaPrimerParcial: number;
    notaSegundoParcial: number;
    onNombreChange: (value: string) => void;
    onNotaPrimerParcialChange: (value: number) => void;
    onNotaSegundoParcialChange: (value: number) => void;
    onAgregarEstudiante: () => void;
    editando: boolean;
}

const FormularioEstudiante: React.FC<FormularioEstudianteProps> = ({
    nombre,
    notaPrimerParcial,
    notaSegundoParcial,
    onNombreChange,
    onNotaPrimerParcialChange,
    onNotaSegundoParcialChange,
    onAgregarEstudiante,
    editando,
}) => {
    return (
        <div className="mb-4 flex items-center">
            <InputTexto
                placeholder="Nombre del estudiante"
                value={nombre}
                onChange={onNombreChange}
            />
            <InputNumero
                placeholder="Nota del primer parcial"
                value={notaPrimerParcial}
                onChange={onNotaPrimerParcialChange}
            />
            <InputNumero
                placeholder="Nota del segundo parcial"
                value={notaSegundoParcial}
                onChange={onNotaSegundoParcialChange}
            />
            <BotonAgregarEditar onClick={onAgregarEstudiante} editando={editando} />
        </div>
    );
};

export default FormularioEstudiante;