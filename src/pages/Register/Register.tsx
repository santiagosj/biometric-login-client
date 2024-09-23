import React from 'react';
import UserForm from '../../componentes/Molecules/UserForm/UserForm';
import './Register.scss';
import { httpRequestFactory } from '../../service/httpRequestFactory';

const Register: React.FC = () => {
    const registerUser = httpRequestFactory('POST', 'https://biometric-login-server-production.up.railway.app/register');

    const fields = [
        { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'example@youremail.com', required: true },
        { name: 'password', label: 'Password', type: 'password', placeholder: '********', required: true },
    ];

    const handleRegister = (data: { [key: string]: string }) => {
        console.log('Register data:', data);
    };

    return (
        <UserForm fields={fields} submitLabel='Register' handleSubmit={handleRegister} />
    )
}

export default Register;