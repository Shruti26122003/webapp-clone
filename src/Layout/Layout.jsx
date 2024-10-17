import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from '../Pages/login/Login';
import Signup from '../Pages/signup/Signup';
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';
import Chatbox from '../Pages/Chatbox/Chatbox';
import Nav from '../Components/Nav/Nav';
import Leftbar from '../Components/Leftbar/Leftbar';
import Rightbar from '../Components/Rightbar/Rightbar';

export default function LayOut() {
  
  const Feed = () => {
    return (
      <>
        <Nav />
        <main>
          <Leftbar />
        <div className="container">
          <Outlet />
        </div>
        <Rightbar/>
      </main>
      </>

    );
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Feed />,  
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
        {
          path: '/chatbox/:id',
          element: <Chatbox />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
