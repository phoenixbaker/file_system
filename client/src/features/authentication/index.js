import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import RegisterBox from "./components/RegisterBox";
import LogInBox from "./components/LogInBox";
import { UserContext } from "../../context/userContext";

export function AuthLogIn() {
  const { userState } = useContext(UserContext);

  if (userState !== null) return <Redirect to="/files" />;
  return <LogInBox />;
}

export function AuthRegister() {
  const { userState } = useContext(UserContext);

  if (userState !== null) return <Redirect to="/files" />;
  return <RegisterBox />;
}
