import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Root from './routes/Roots/Root.jsx';
import Error from './routes/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <div >Home {import.meta.env.VITE_TEST}</div>,
        errorElement: <Error/>
      },
      {
        path: "login",
        element: <div >Login</div>,
        errorElement: <Error/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
