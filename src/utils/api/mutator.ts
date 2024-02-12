import { ECOM } from "../../lib/axios";
import { Obj } from "../../types";

export const mutator = async (
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  data?: Obj
) => {
  const res = await ECOM({
    method,
    url,
    data,
  });
  return res.data;
};
