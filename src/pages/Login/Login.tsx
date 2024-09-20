import React from 'react';
import UserForm from '../../componentes/Molecules/UserForm/UserForm';
import './Login.scss';

const Login: React.FC = () => {

    const handleLogin = () => {
        console.log('Login clicked');
    }

    return (
        <UserForm type='login' handleSubmit={handleLogin} />
    )
}

export default Login;