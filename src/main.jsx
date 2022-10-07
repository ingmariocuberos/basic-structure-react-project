import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './normalize.css'
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RouterApp } from './router/RouterApp';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>    
  </React.StrictMode>
)
