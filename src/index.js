import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home/Home';
import Usuario from './pages/usuario/Usuario';
import Profissional from './pages/profissional/Profissional';
import App from './App';
import Error from './components/error/Error';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"usuario",
        element:<Usuario/>
      },
      {
        path:"profissional",
        element:<Profissional/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


