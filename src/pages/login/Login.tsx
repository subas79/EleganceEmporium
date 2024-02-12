import React from "react";
import FromWrapper from "../../components/formWrapper/FormWraper";
import LoginForm from "./helpers/LoginForm";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FromWrapper onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <LoginForm />
    </FromWrapper>
  );
};

export default Login;
