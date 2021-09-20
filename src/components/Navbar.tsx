import React from "react";
import { useHistory } from "react-router-dom";
import { Layout, Menu, Row } from "antd";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

interface Props {}

export const Navbar: React.FC = (props: Props) => {
  const router = useHistory();
  const { logout } = useActions();

  const { isAuth, user } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={() => logout()}>
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
