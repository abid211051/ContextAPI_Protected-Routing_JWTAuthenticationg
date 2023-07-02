import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import ManageUser from './component/ManageUser';
import Profile from './component/Profile';
import Register from './component/Register';
import Private from './component/Private';
import { UserProvider } from './component/ContextProvider';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<UserProvider><Home /></UserProvider>,
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/private/*',
      element: <Private />,
      loader: async () => {
        const token = localStorage.getItem('authToken');
        const res = await fetch(`http://localhost:5000/api/verifyjwt`, { headers: { Authorization: token } });
        const data = await res.json()
        return data.success;
      },
      children: [
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'manageuser',
          element: <ManageUser />
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
