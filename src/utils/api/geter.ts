import { ECOM } from "../../lib/axios";

export const geter = async (url: string) => {
   const res = await ECOM.get(url)
  return res.data;
};