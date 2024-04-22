import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Orders from './Components/Orders';
import AuthProvider from './Provider/AuthProvider';
import Private from './Components/Private';
import Watch from './Components/Watch';
import Want from './Components/Want';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/orders",
        element: <Private><Orders /></Private>
      },
      {
        path: "/watch",
        element: <Private><Watch /></Private>
      },
      {
        path: "/want",
        element: <Private><Want /></Private>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
