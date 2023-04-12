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
import Page from './components/Page/Page';
import Details from './components/Details/Details';
import Jobs from './components/Jobs/Jobs';









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
        path:"/Blog",
        element:<Blog></Blog>
      },
      {
        path:'Jobs',
        element:<Jobs></Jobs>,
        loader:()=>fetch('Features.json')

      },
      {
           path:'/:JobsId',
           element:<Jobs></Jobs>,
           loader:({params})=>console.log(params)
      },
      
      {
        path:'*',
      element:<Page></Page>
      }
    
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
