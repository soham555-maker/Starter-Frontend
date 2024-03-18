import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Root from './routes/Roots/Root.jsx';
import Error from './routes/Errors/Error.jsx';
import { Provider } from 'react-redux';
import {store} from './Redux/Stores/Store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><Root/></Provider>,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <Provider store={store}><div >Home {import.meta.env.VITE_TEST}</div></Provider>,
        errorElement: <Error/>
      },
      {
        path: "login",
        element: <Provider store={store}><div >Login</div></Provider>,
        errorElement: <Error/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
