import {
    Link
  } from "react-router-dom";
import { useDispatch } from "react-redux";
import v from "validator";
import { useForm } from '../hooks/useForm';
import { registerWithEmailAndPassword } from "../actions/authAction";
import { removeErrorMid, setErrorMid } from "../actions/errorAction";


export const RegisterScreen = () => {

    const initialForm = {
        name: '',
        email: '',
        password: '',
        password2: '',
    };

    const dispatch = useDispatch();
    
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { name, email, password, password2 } = formValues;

    const validationRegister = (name, email, password, password2) =>{

        if( v.isEmpty(name)){
            dispatch(setErrorMid('Debe ingresar un nombre'));
            return false;
        } else if( v.escape(name).includes(";") ){
            dispatch(setErrorMid('Ingrese un nombre válido'))
            return false;
        } else if( !v.isEmail(email) ){
            dispatch(setErrorMid('Ingrese un email válido'));
            return false;
        } else if( password !== password2 || password.length < 5 ){
            dispatch(setErrorMid('Passwords incorrectos'));
            return false;
        }
    
        dispatch(removeErrorMid());
    
        return true;
    }

    const handleRegister = (e) =>{

        e.preventDefault();

        console.log('Datos de register', name, email, password, password2)

        const vRegister = validationRegister(name, email, password, password2);

        if( vRegister ){
            dispatch(registerWithEmailAndPassword(email, password));
        }
    }

    return (
        <form 
            className=""
            onSubmit={ handleRegister }>
            <Link to="/index" className=""><i className=""></i></Link>
            <h1 className="">Login Screen</h1>
            <label className="" htmlFor="nombre">Nombre</label>
            <div className="">
                <input 
                    className="" 
                    id="nombre"
                    name="name"
                    type="text"
                    value={ name }
                    onChange={ handleInputChange }
                    autoComplete="off"/>
                <label className="" htmlFor="email">Email</label>
                <input 
                    className="" 
                    id="email"
                    name="email"
                    type="email"
                    value={ email }
                    onChange={ handleInputChange }
                    autoComplete="off"/>   
                <label className="" htmlFor="password">Password</label>
                <input 
                    className="" 
                    id="password"
                    name="password"
                    type="password"
                    value={ password }
                    onChange={ handleInputChange }
                    autoComplete="off"/>             
                <label className="auth__label-register" htmlFor="password2">Confirm password</label>
                <input 
                    className=""
                    id="password2"
                    name="password2"
                    type="password"
                    value={ password2 }
                    onChange={ handleInputChange }
                    autoComplete="off"/>
            </div>
            <Link 
                to='/register'
                type="submit"
                className=""
                onClick={handleRegister}
                >
                Registrate
            </Link>
            <p className="">¿Ya estás registrado? <Link to="/inicia-ahora" className="">Inicia sesión</Link></p>
        </form>
    )
}
