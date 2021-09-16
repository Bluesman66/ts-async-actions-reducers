import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

interface Props {}

export const AppRouter: React.FC = (props: Props) => {
  const auth = false;
  return auth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
    </Switch>
  );
};
