import React from "react";
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";

interface Props {}

interface EventFormProps {
  guests: IUser[];
}

export const EventForm: React.FC<EventFormProps> = ({ guests }: EventFormProps) => {
  return (
    <Form>
      <Form.Item label="Event description" name="description" rules={[rules.required()]}>
        <Input />
      </Form.Item>
      <Form.Item label="Event date" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Select>
          {guests.map((guest) => {
            return (
              <Select.Option key={guest.username} value={guest.username}>
                {guest.username}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
