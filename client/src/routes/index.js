import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

import {
  HomeScreen,
  FilesScreen,
  DocumentScreen,
  AuthLogin,
  RegisterScreen,
} from "../screens/index.js";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/files" component={FilesScreen} />
      <Route exact path="/new/document">
        <Redirect to={`/documents/${uuidV4()}`} />
      </Route>
      <Route path="/documents/:id" component={DocumentScreen} />
      <Route exact path="/auth/login" component={AuthLogin} />
      <Route exact path="/auth/register" component={RegisterScreen} />
    </Switch>
  );
}
