import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { decryptedData, encryptData } from "../global/functions";
import { MttoApp } from "../MttoApp"

export const AppPublicRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<MttoApp/>} />
        <Route path='/nosotros' element={<MttoApp/>} />
        <Route path='/inicia-ahora' element={<MttoApp/>} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
    </Routes>
  )
}
