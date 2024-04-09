import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";

import AppDataProvider from "./AppDataProvider/AppDataProvider";
import Register from "./auth/Register";
import SignIn from "./auth/SignIn";
import Home from './Home';
import "./index.css";
import NotFound from "./NotFound/NotFound";
import PrivateRoute from "./Private/PrivateRoute";
import UpdateUser from "./User/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/login',
        element: <SignIn/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/update-profile',
        element: <PrivateRoute><UpdateUser/></PrivateRoute>
      }
    ],
    errorElement: <NotFound/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppDataProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </AppDataProvider>
  </React.StrictMode>
);
