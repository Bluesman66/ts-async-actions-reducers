import React from "react";
import { Form, Input } from "antd";
import { rules } from "../utils/rules";

interface Props {}

export const EventForm: React.FC = (props: Props) => {
  return (
    <Form>
      <Form.Item label="Event description" name="description" rules={[rules.required()]}>
        <Input />
      </Form.Item>
    </Form>
  );
};
