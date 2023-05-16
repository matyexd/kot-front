import { lazy } from "react";
import { AppPath } from "./routes-enums";
import { Route, Switch } from "react-router-dom";
import Main from "../views/main";
import { AuthLayout } from "../layouts/AuthLayout";

export const ROUTES = [
  {
    path: AppPath.main,
    component: Main,
    protected: false,
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
  console.log(route);

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
