import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ErrorPage from "./pages/Error";
import { Tab } from "@headlessui/react";
import Navbar from "./components/Navbar";
import LeftBar from "./components/leftbar";
import RightBar from "./components/RightBar";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile/:id",
      element: <Profile />,
    },
    {
      path: "auth",
      element: <Auth />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
