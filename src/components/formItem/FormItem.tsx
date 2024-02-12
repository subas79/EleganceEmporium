import React from "react";
import { Form } from "antd";

type FormItemProps = {
  formItems: {
    label?: string;
    name: string;
    rules?: { required: boolean; message: string }[];
    valuePropName?: string;
    wrapperCol?: { offset: number; span: number };
    element: JSX.Element;
  }[];
};

const FormItem: React.FC<FormItemProps> = ({ formItems }) => {
  return (
    <>
      {formItems.map((el, index) => (
        <Form.Item
          key={index}
          label={el.label}
          name={el.name}
          rules={el.rules}
          valuePropName={el.valuePropName}
          wrapperCol={el.wrapperCol}
        >
          {el.element}
        </Form.Item>
      ))}
    </>
  );
};

export default FormItem;