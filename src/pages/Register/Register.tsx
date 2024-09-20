import React from 'react';
import UserForm from '../../componentes/Molecules/UserForm/UserForm';
import './Register.scss';

const Register: React.FC = () => {

    const handleRegister = () => {
        console.log('click registro');
    }
    return (
        <UserForm type='register' handleSubmit={handleRegister} />
    )
}

export default Register;