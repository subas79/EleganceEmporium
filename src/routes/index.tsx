import { useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { useGetToken } from "../hooks/useGetToken";

export const AppRoutes = () => {
  const token = useGetToken();
  const routes = token ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
