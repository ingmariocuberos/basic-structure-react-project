import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { logAction } from '../store/reducers/authReducer';

export const AppPrivateRoutes = () => {

    const dispatch = useDispatch();

    const logOut = () =>{
        dispatch(logAction(false));
        localStorage.removeItem('user');
    }

  return (
    <Routes>
        <Route path='' element={<button onClick={logOut}>Pagina Privada</button>} />
        <Route path='/hola' element={<h1>Pagina Privada 2</h1>} />
        <Route
          path="*"
          element={<Navigate to="/app" replace />}
        />
    </Routes>
  )
}
