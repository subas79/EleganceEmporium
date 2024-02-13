import React from "react";
import FromWrapper from "../../components/formWrapper/FormWraper";
import LoginForm from "./helpers/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth";
import storage from "../../utils/storage";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useLogin();

  const onFinish = async (values: any) => {
    const res = await login.mutateAsync(values);

    if (res.accessToken) {
      storage.setToken(res.accessToken);
      navigate("/dashboard");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FromWrapper onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <LoginForm />
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </FromWrapper>
  );
};

export default Login;
