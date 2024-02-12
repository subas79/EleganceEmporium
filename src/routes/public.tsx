// import { lazyImport } from "../utils/lazyImports";

import Login from "../pages/login/Login";

// const  {Login}  = lazyImport(
//     () => import("../pages/login/Login"),
//     "Login"
//   );

export const publicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
];
