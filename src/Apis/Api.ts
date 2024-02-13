import { ECOM_URL } from "../config/api";
import { geter } from "../utils/api/geter";
import { mutator } from "../utils/api/mutator";

// Auth
export const signup = (data: any): Promise<void> =>
  mutator("POST", ECOM_URL.register, data);

export const login = (data: any): Promise<void> =>
  mutator("POST", ECOM_URL.login, data);

//Product
export const product = (): Promise<void> => geter(ECOM_URL.product);
