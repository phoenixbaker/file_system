import React from "react";
import { Route, Switch } from "react-router-dom";

import HandleNewFile from "../utils/HandleNewFile.js";
import {
  HomeScreen,
  FilesScreen,
  DocumentScreen,
  AuthLogin,
  RegisterScreen,
} from "../screens";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/files">
        <FilesScreen />
      </Route>
      <Route path="/new/document/:name">
        <HandleNewFile />
      </Route>
      <Route path="/documents/:id/:name">
        <DocumentScreen />
      </Route>
      <Route path="/auth/login">
        <AuthLogin />
      </Route>
      <Route path="/auth/register">
        <RegisterScreen />
      </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
}
