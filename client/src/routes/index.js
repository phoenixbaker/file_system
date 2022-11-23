import React from "react";
import { Route, Switch } from "react-router-dom";

import HandleNewFile from "../utils/HandleNewFile.js";
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
      <Route exact path="/new/document/:name" component={HandleNewFile} />
      <Route path="/documents/:id/:name" component={DocumentScreen} />
      <Route exact path="/auth/login" component={AuthLogin} />
      <Route exact path="/auth/register" component={RegisterScreen} />
    </Switch>
  );
}
