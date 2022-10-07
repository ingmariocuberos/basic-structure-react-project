import BuildCircle from '../../assets/Build circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logInAction } from '../../store/reducers/authReducer';
import { encryptData } from '../../global/functions';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const dispatch = useDispatch();

    const { auth } = useSelector(state => state);

    const logIn = () =>{
        dispatch(logInAction({accessToken: true}));
        localStorage.setItem('user', encryptData(JSON.stringify({...auth})));
    }

    const firstThunkAction = () =>{
      dispatch()
    }
    
  return (
    <div className="main-navbar">
        <img src={BuildCircle} alt="Llave mecánica en circulo" className="svg-build-circle" />
        <div className="container-menu-navbar">
        <a href="" className="link-navbar">Inicio</a>
        <Link href="" className="link-navbar" onClick={firstThunkAction}>Nosotros</Link>
        <Link to='/inicia-ahora' className="btn-primary btn-link-navbar">Inicia Ahora</Link>
        </div>
    </div>
  )
}



