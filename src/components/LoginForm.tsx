import React from "react";
import { Button, Form, Input } from "antd";
import { rules } from "../utils/rules";

interface Props {}

export const LoginForm: React.FC = (props: Props) => {
  const submit = () => {
    console.log("submit");
  };

  return (
    <Form onFinish={submit}>
      <Form.Item label="Username" name="username" rules={[rules.required("Please input your username!")]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[rules.required("Please input your password!")]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
