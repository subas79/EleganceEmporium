import { getAuthToken } from "../utils/auth";
import React, { useEffect } from "react";

export const useGetToken = () => {
  const [token, setToken] = React.useState("");

  const getToken = async () => {
    let tokenResponse = await getAuthToken();
    setToken(tokenResponse);
  };

  useEffect(() => {
    getToken();
  }, []);

  return token;
};
