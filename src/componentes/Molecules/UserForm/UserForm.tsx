import React, { useEffect, useState } from 'react';
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import { LoginForm, RegisterForm } from '../../../models/interfaces/UserFormModels';
import "./UserForm.scss";

/**
 * TODOS
 * Accesibilidad: etiqueta label adecuada para mejorar la accesibilidad.
   Validaciones avanzadas: implementar validaciones más complejas como la longitud mínima de la contraseña o la validación del formato del correo electrónico.
   Manejo de estados de carga:  agregar un estado de carga (loading) para deshabilitar el botón mientras se envían los datos.
 */

/**
 * @param {type} - string que define el tipo de formulario registro o login
 * @param {handleSubmit} - funcion que maneja el submit del formulario.
 * 
 */

interface UserFormTypeProps {
    type: 'login' | 'register';
    handleSubmit: (data: LoginForm | RegisterForm) => void;
}

const UserForm: React.FC<UserFormTypeProps> = ({ type, handleSubmit }) => {

    const formType = type === 'login' ?
        { username: '', password: '' } :
        { username: '', email: '', password: '' };

    const [formData, setFormData] = useState<LoginForm | RegisterForm>(formType);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name) {
            // setFormData(prevState => ({ ...prevState, [name]: value }));
            setFormData(({ ...formData, [name]: value }));

        } else {
            console.warn("Input field without name attribute.");
        }
    }

    const validateForm = (): boolean => {
        if (!formData.username || !formData.password) {
            setError('Username and password are required');
            return false;
        }
        if (type === 'register' && !(formData as RegisterForm).email) {
            setError('Email is required');
            return false;
        }
        setError(null);
        return true;
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(formData);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                type='text'
                name='username'
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Username'
            />
            {type === 'register' &&
                <Input
                    type="email"
                    name="email"
                    placeholder="example@youremail.com"
                    value={(formData as RegisterForm).email}
                    onChange={handleInputChange}
                />}
            <Input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleInputChange}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
                type="submit"
                label={type === 'login' ? 'login' : 'register'}
            />
        </form>
    );
}

export default UserForm;