import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { getAuthToken, logOut } from "../utils/auth";

export const ECOM = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

ECOM.interceptors.request.use(async (config: any) => {
  const token = await getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

ECOM.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status || 403 === error.response.status) {
        // toast.error(SESSION_EXPIRED);
      logOut();
    }
    return Promise.reject(error);
  }
);
