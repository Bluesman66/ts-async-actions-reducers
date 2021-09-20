import React from "react";
import { Card, Layout, Row } from "antd";
import { LoginForm } from "../components/LoginForm";

interface Props {}

export const Login: React.FC = (props: Props) => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};
