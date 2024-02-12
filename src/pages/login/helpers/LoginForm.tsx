import React from "react";
import { Button, Checkbox, FormItemProps, Input } from "antd";
import FormItem from "../../../components/formItem/FormItem";

const formItems = [
  {
    label: "UserName",
    name: "username",
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
    name: "remember",
    valuePropName: "checked",
    wrapperCol: { offset: 8, span: 16 },
    element: <Checkbox>Remember me</Checkbox>,
  },
  {
    wrapperCol: { offset: 8, span: 16 },
    element: (
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    ),
  },
];

const LoginForm: React.FC = () => {
  return (
    <FormItem formItems={formItems as FormItemProps[]}/>
  );
};

export default LoginForm;