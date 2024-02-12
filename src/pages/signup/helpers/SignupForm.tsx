import React from "react";
import { Button, FormItemProps, Input } from "antd";
import FormItem from "../../../components/formItem/FormItem";

const formItems = [
  {
    label: "UserName",
    name: "userName",
    rules: [{ required: true, message: "Please input your username!" }],
    element: <Input />,
  },
  {
    label: "Email",
    name: "email",
    rules: [{ required: true, message: "Please input your username!" }],
    element: <Input />,
  },
  {
    label: "Password",
    name: "password",
    rules: [{ required: true, message: "Please input your password!" }],
    element: <Input.Password />,
  },
  {
    label: "Re-enter Password",
    name: "reenterpassword",
    rules: [{ required: true, message: "Please input your password!" }],
    element: <Input.Password />,
  },
  {
    wrapperCol: { offset: 8, span: 16 },
    element: (
      <Button type="primary" htmlType="submit">
        Signup
      </Button>
    ),
  },
];

const SignupForm: React.FC = () => {
  return <FormItem formItems={formItems as FormItemProps[]} />;
};

export default SignupForm;
