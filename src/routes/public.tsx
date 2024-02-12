import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

export const publicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
