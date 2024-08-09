import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver  } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/styles.css';

//esquema de validación
const valSchema=yup.object().shape({
    username: yup.string()
        .required('El nombre de usuario es requerido')
        .min(3,'El nombre de usuario debe tener al menos 3 caracteres'),
    email: yup.string()
        .email('Debe tener un formato válido')
        .required('El correo elctrónico es requerido'),
    password: yup.string()
        .required('La contraseña es requerida')
        .min(6,'La contraseña debe tener al menos 6 caracteres')
        .oneOf([yup.ref('confirmPassword'),null],'Las contraseñas deben coincidir'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'),null],'Las contraseñas deben coincidir')
        /*.oneOf([yup.ref('password')],'Las contraseñas deben coincidir')
        .required()*/
});

const SalesForm=()=>{
    const {register,handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(valSchema)
    });

    const onSubmit = data => {
        console.log(data);
        alert('Registro exitoso');
    };

    return (
        <div className='form-container'>
            <h2>Registro de usuario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='txtUser'>Usuario</label>
                    <input id="txtUser" {...register('username')} />
                    {errors.username && <p className='error-message'>
                        {errors.username.message}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='txtEmail'>Correo</label>
                    <input id="txtEmail" type="email" {...register('email')} />
                    {errors.email && <p className='error-message'>
                        {errors.email.message}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='txtPassword'>Contraseña</label>
                    <input id="txtPassword" type="password" {...register('password')} />
                    {errors.password && <p className='error-message'>
                        {errors.password.message}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='txtConfirmarPassword'>Confirmar contraseña</label>
                    <input id="txtConfirmarPassword" type="password" {...register('confirmPassword')} />
                    {errors.confirmPassword && <p className='error-message'>
                        {errors.confirmPassword.message}</p>}
                </div>
                <button>Registrarse</button>
            </form>
        </div>
    );
};

export default SalesForm;