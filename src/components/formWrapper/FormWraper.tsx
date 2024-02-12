import React from "react";
import { Form } from "antd";

const FormWrapper: React.FC<any> = ({ children, ...props }) => {
    return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={props.onFinish}
        onFinishFailed={props.onFinishFailed}
        {...props}
        autoComplete="off"
      >
        {children}
      </Form>
    </>
  );
};

export default FormWrapper;
