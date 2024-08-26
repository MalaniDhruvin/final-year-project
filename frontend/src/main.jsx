import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Afterlogin from './Components/Afterlogin.jsx';
import LoginPage from './Components/LoginPage.jsx';
import Employee from './Components/Employee.jsx';
import Insert_user from './Components/Insertuser.jsx';
import DataType from './Components/DataType.jsx';
import Manager from './Components/Manager.jsx';
import Manager_insert from './Components/Manager_insert.jsx';
import Sidebar from './Components/Sidebar.jsx';
import ManagerModule from './Components/ManagerModule.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [{
      path: '/insights',
      element: <ManagerModule/>,
    },
    {
      path: '/',
      element: <LoginPage></LoginPage>
    }, {
      path: '/insert-data',
      element: <Employee></Employee>
    }, {
      path: '/insights/insert-user',
      element: <Insert_user></Insert_user>
    },{
      path:'/manager',
      element:<Manager></Manager>
    },{
      path:'/manager/insert-user',
      element:<Manager_insert></Manager_insert>
    },]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
