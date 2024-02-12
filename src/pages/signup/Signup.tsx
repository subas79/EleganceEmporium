import React from "react";
import FromWrapper from "../../components/formWrapper/FormWraper";
import SignupForm from "./helpers/SignupForm";
import { ECOM_URL } from "../../config/api";

const Signup: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    console.log(ECOM_URL.register)
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
