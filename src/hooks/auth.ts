import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../Apis/Api";
import { toast } from "react-toastify";
import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../utils/constants/successConstants";

export const useSignup = () => {
    return useMutation({
      mutationFn: signup,
      onSuccess: () => {
        toast.success(SIGNUP_SUCCESS);
      },
      onError: (e)=>{
        toast.error(e?.response.data);
      }
    });
  };

  export const useLogin = () => {
    return useMutation({
      mutationFn: login,
      onSuccess: () => {
        toast.success(LOGIN_SUCCESS);
      },
      onError: (e)=>{
        toast.error(e?.response.data);
      }
    });
  };