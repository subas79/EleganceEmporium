import { ECOM_URL } from "../config/api";
import { mutator } from "../utils/api/mutator";

export const signup = (data: any): Promise<void> =>
  mutator("POST", ECOM_URL.register, data);

export const login = (data: any): Promise<void> =>
  mutator("POST", ECOM_URL.login, data);
