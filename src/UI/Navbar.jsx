import BuildCircle from '../assets/Build circle.svg';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logAction } from '../store/reducers/authReducer';
import { encryptData } from '../global/functions';

export const Navbar = () => {

    const dispatch = useDispatch();

    const { auth } = useSelector(state => state);

    const logIn = () =>{
        dispatch(logAction(true));
        localStorage.setItem('user', encryptData(JSON.stringify({...auth, logged: true})));
    }
    
  return (
    <div className="main-navbar">
        <img src={BuildCircle} alt="Llave mecánica en circulo" className="svg-build-circle" />
        <div className="container-menu-navbar">
        <a href="" className="link-navbar">Inicio</a>
        <a href="" className="link-navbar">Nosotros</a>
        <button className="btn-primary btn-link-navbar" onClick={logIn}>Inicia Ahora</button>
        </div>
    </div>
  )
}



