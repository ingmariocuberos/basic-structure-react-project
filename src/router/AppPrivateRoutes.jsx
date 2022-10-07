import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { logoutMid } from '../components/actions/authAction';

export const AppPrivateRoutes = () => {

    const dispatch = useDispatch();

    const logOut = () =>{
        dispatch(logoutMid());
        localStorage.removeItem('user');
    }

  return (
    <Routes>
        <Route path='' element={<button onClick={logOut}>LogOut</button>} />
        <Route path='/hola' element={<h1>Pagina Privada 2</h1>} />
        <Route
          path="*"
          element={<Navigate to="/app" replace />}
        />
    </Routes>
  )
}
