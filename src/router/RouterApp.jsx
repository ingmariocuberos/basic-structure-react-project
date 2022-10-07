import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { decryptedData, isJson } from '../global/functions';
import { logInAction } from '../store/reducers/authReducer';
import { AppPrivateRoutes } from './AppPrivateRoutes';
import { AppPublicRoutes } from './AppPublicRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const RouterApp = () => {

  const user = isJson(decryptedData(localStorage.getItem('user'))) ? JSON.parse(decryptedData(localStorage.getItem('user'))) : {accessToken: false};

  const dispatch = useDispatch();

  dispatch(logInAction(user.accessToken));

  return (
    <Routes>
        <Route path='/app/*' element={
          <PrivateRoute>
            <AppPrivateRoutes/>
          </PrivateRoute>
        }/>
        <Route path='/*' element={
          <PublicRoute>
            <AppPublicRoutes/>
          </PublicRoute>
        }/>
    </Routes>
  )
}
