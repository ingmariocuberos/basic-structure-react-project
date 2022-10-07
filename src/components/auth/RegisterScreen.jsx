import {
    Link
  } from "react-router-dom";
import { useDispatch } from "react-redux";
import v from "validator";
import { useForm } from '../hooks/useForm';
import { registerWithEmailAndPassword } from "../actions/authAction";


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
            // dispatch(setError('Debe ingresar un nombre'));
            return false;
        } else if( v.escape(name).includes(";") ){
            // dispatch(setError('Ingrese un nombre válido'))
            return false;
        } else if( !v.isEmail(email) ){
            // dispatch(setError('Ingrese un email válido'));
            return false;
        } else if( password !== password2 || password.length < 5 ){
            // dispatch(setError('Passwords incorrectos'));
            return false;
        }
    
        // dispatch(removeError());
    
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
            className="auth__login-container"
            onSubmit={ handleRegister }>
            <Link to="/index" className="auth__go-before"><i className="fas fa-times"></i></Link>
            <h1 className="auth__title">Login Screen</h1>
            <label className="auth__label-register" htmlFor="nombre">Nombre</label>
            <div className="auth__inputs-container">
                <input 
                    className="input d-block auth__input-register" 
                    id="nombre"
                    name="name"
                    type="text"
                    value={ name }
                    onChange={ handleInputChange }
                    autoComplete="off"/>
                <label className="auth__label-register" htmlFor="email">Email</label>
                <input 
                    className="input d-block auth__input-register" 
                    id="email"
                    name="email"
                    type="email"
                    value={ email }
                    onChange={ handleInputChange }
                    autoComplete="off"/>   
                <label className="auth__label-register" htmlFor="password">Password</label>
                <input 
                    className="input d-block auth__input-register" 
                    id="password"
                    name="password"
                    type="password"
                    value={ password }
                    onChange={ handleInputChange }
                    autoComplete="off"/>             
                <label className="auth__label-register" htmlFor="password2">Confirm password</label>
                <input 
                    className="input d-block auth__input-register"
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
                className="button d-block auth__btn-register"
                onClick={handleRegister}
                >
                Registrate
            </Link>
            <p className="d-block mt-2">¿Ya estás registrado? <Link to="/inicia-ahora" className="link">Inicia sesión</Link></p>
        </form>
    )
}
