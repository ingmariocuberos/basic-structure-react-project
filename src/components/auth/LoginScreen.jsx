import React from 'react';
import { useDispatch } from "react-redux";
import v from "validator";
import {
    Link
  } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { removeErrorMid, setErrorMid } from '../actions/errorAction';
import { loginWithEmailAndPassword } from '../actions/authAction';


export const LoginScreen = () => {

    const initialForm = {
        email: '',
        password: ''
    };
    
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { email, password } = formValues; 
    
    const dispatch = useDispatch();

    const valida = ( email, password ) =>{

        if( !v.isEmail(email)){
            dispatch(setErrorMid('Email incorrecto'));
            return false;
        } else if( v.isEmpty(password) ){
            dispatch(setErrorMid('Password incorrecto'));
            return false;
        }
        dispatch(removeErrorMid());
        return true;
    }

    const handleLogin = (e) =>{

        e.preventDefault();
        if( valida(email, password) ){
            dispatch( loginWithEmailAndPassword( email, password ));
        }
    }

    return (
        <form 
            className=""
            onSubmit={ handleLogin }>
            <Link to="/" className=""><i className=""></i></Link>
            <h1 className="text-primary">Login Screen</h1>
            <p className="text-primary">¿No tienes una cuenta? <Link to="/register" className="link">Registrate</Link></p>
            <label className="text-primary" htmlFor="email">Email</label>
            <input 
                className="text-primary" 
                id="email"
                name="email"
                value={ email }
                onChange={ handleInputChange }
                type="email"/>
            <label className="text-primary" htmlFor="password">Password</label>
            <input 
                className="text-primary"
                id="password" 
                name="password"
                value={ password }
                onChange={ handleInputChange }
                type="password"/>
            <button 
                type="submit" 
                className="btn-primary text-primary"
                >
                Iniciar Sesión
            </button>
        </form>
    )
}
