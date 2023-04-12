import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Applied from './components/Applied-Jobs/Applied';
import Job from './components/Job/Job';






const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
  },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/Applied Jobs",
        element:<Applied></Applied>,
        loader:() =>fetch('Features.json')
      },
      {
        path:"/:Applied jobs Id",
        element:<Applied></Applied>,
        
      }, 
      {
        path:"/Blog",
        element:<Blog></Blog>
      }
    
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
