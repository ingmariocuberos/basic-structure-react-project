import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { MttoApp } from "../MttoApp"

export const AppPublicRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<MttoApp/>} />
        <Route path='/nosotros' element={<MttoApp/>} />
        <Route path='/inicia-ahora' element={<LoginScreen/>} />
        <Route path='/register' element={<RegisterScreen/>} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
    </Routes>
  )
}
