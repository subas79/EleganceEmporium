import { toast } from "react-toastify";
import { SOMETHING_WENT_WRONG } from "../constants/errorConstants";

export const handleError = (error: any) => {
  return toast.error(
    error?.response?.data?.error?.message || SOMETHING_WENT_WRONG
  );
};
