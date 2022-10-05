import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({children}) => {

    const { logged } = useSelector(state => state.auth);

    console.log('logged in public route SEGUNDO', logged)

    return ( !logged ? children : <Navigate to='/app' /> )
}
