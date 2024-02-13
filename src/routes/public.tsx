import { Suspense } from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { Spin } from "antd";
import { Outlet } from "react-router-dom";
import AppLayout from "../layout/layout";

const AppUser = () => {
  return (
    <AppLayout>
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center p-10">
            <Spin />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export const publicRoutes = [
  {
    path: "/",
    element: <AppUser />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
];
