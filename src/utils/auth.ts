// import { toast } from "react-toastify";
// import { loginRequest, msalInstance } from "../config/msal-config";
// import { TOKEN_ERROR } from "./constants/errorConstants";
import storage from "./storage";

export const getAuthToken = async () => {
  // const account = msalInstance.getAllAccounts()[0];
  const stringToken = storage.getToken();
  if (stringToken)  return stringToken;
  
  // try {
  //   const tokenResponse = await msalInstance.acquireTokenSilent({
  //     scopes: loginRequest.scopes,
  //     account: account,
  //   });
  //   stringToken = tokenResponse.accessToken;
  //   storage.setToken(stringToken);
  //   return stringToken;
  // } catch (error) {
  //   toast.error(TOKEN_ERROR);
  //   logOut();
  //   throw error;
  // }
};

export const logOut = () => {
  // msalInstance.logoutRedirect();
  storage.clearToken();
};