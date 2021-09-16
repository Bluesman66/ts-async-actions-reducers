import React from "react";
import { useHistory } from "react-router-dom";
import { Layout, Menu, Row } from "antd";
import { RouteNames } from "../router";

interface Props {}

export const Navbar: React.FC = (props: Props) => {
  const router = useHistory();
  const auth = true;
  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}>Brenda</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={() => console.log("Logout")}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="vertical" selectable={false}>
            <Menu.Item key={1} onClick={() => router.push(RouteNames.LOGIN)}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};
