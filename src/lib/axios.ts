import axios from "axios";
// import { toast } from "react-toastify";

import { API_BASE_URL } from "../config/api";
import { getAuthToken, logOut } from "../utils/auth";
// import { getMslToken, logOut } from "@/utils/auth";
// import { SESSION_EXPIRED } from "@/utils/constants/errorConstants";

export const ECOM = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer <token>",
      // Accept: "application/json",
      // Cache-Control: "no-cache",
      // User-Agent: "Your User Agent",
      // Language: "en-US",
      // Cookie: "name=value;",
    },
  });

ECOM.interceptors.request.use(async (config: any) => {
  const token = await getAuthToken();
  config.headers.Authorization = `Bearer ${token}`;

//   if (config.method === "post" || config.method === "patch") {
//     config.headers["MSCRM.SuppressDuplicateDetection"] = "false";
//   }

  return config;
});

ECOM.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status || 403 === error.response.status) {
    //   toast.error(SESSION_EXPIRED);
      logOut();
    }
    return Promise.reject(error);
  }
);
