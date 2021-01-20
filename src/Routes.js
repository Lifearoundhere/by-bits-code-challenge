import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Policy from "./components/Policy";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <AuthenticatedRoute exact path="/policy">
        <Policy />
      </AuthenticatedRoute>
    </Switch >
  );
}