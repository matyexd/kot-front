import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppPath } from "../../routes/routes-enums";
import { Registration } from "./Registration";
import { Login } from "./Login";

const Auth = () => {
  return (
    <Switch>
      <Route path={AppPath.signIn} exact>
        <Login />
      </Route>
      <Route path={AppPath.signUp} exact>
        <Registration />
      </Route>
    </Switch>
  );
};

export default Auth;
