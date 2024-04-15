import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";

import Register from "./auth/Register";
import SignIn from "./auth/SignIn";
import EstateDetails from "./components/EstateDetails";
import Home from './Home';
import "./index.css";
import NotFound from "./NotFound/NotFound";
import PrivateRoute from "./Private/PrivateRoute";
import Root from "./Root";
import UpdateUser from "./User/UpdateUser";
import UserProfile from "./User/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
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
      },
      {
        path: '/user-profile',
        element: <PrivateRoute><UserProfile/></PrivateRoute>
      },
      {
        path: '/property/:propertyId',
        element: <PrivateRoute><EstateDetails/></PrivateRoute>
      }
    ],
    errorElement: <NotFound/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
