import React from "react";
import FromWrapper from "../../components/formWrapper/FormWraper";
import { useSignup } from "../../hooks/auth";
import SignupForm from "./helpers/SignupForm";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const signup = useSignup();

  const onFinish = async (values: any) => {
    await signup.mutateAsync(values);
    navigate("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FromWrapper onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <SignupForm />
    </FromWrapper>
  );
};

export default Signup;
