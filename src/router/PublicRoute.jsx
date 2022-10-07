import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({children}) => {

    const { accessToken } = useSelector(state => state.auth);

    return ( !accessToken ? children : <Navigate to='/app' /> )
}
