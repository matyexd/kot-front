import { lazy } from "react";
import { AppPath } from "./routes-enums";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "../views/main";
import { AuthLayout } from "../layouts/AuthLayout";
import { TokenService } from "../services/TokenService";

export const ROUTES = [
  {
    path: AppPath.main,
    component: Main,
    protected: true,
    exact: true,
  },
  {
    path: AppPath.authUrl,
    authNew: true,
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName: "auth" */ "../views/auth")
    ),
  },
];

const RouteComponent = (route) => {
  if (route.protected && !TokenService.isTokenExists()) {
    return <Redirect to={AppPath.signIn} />;
  }

  if (Array.isArray(route.path) && TokenService.isTokenExists()) {
    return <Redirect to={AppPath.main} />;
  }

  if (Array.isArray(route.path) && route.authNew) {
    return (
      <AuthLayout>
        <Route
          path={route.path}
          exact={route.exact}
          render={(props) => <route.component {...props} />}
        />
      </AuthLayout>
    );
  }

  const RouteCmp = route.component;

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <RouteCmp {...props} />}
    />
  );
};

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <RouteComponent key={index + "route"} {...route} />
      ))}
    </Switch>
  );
};
