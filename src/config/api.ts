export const BASE_URL = "http://localhost:5000";

export const API_BASE_URL = `${BASE_URL}/api/`;

export const ECOM_URL = {
    register: API_BASE_URL + "auth/register",
    login: API_BASE_URL + "auth/login",

    product: API_BASE_URL + "products"
}