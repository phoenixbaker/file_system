import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import RegisterBox from "./components/RegisterBox";
import LogInBox from "./components/LogInBox";
import { UserContext } from "../../context/userContext";
import useUser from "hooks/useUser";

export function AuthLogIn() {
  const { user } = useUser();
  if (user !== null) return <Redirect to="/files" />;
  return <LogInBox />;
}

export function AuthRegister() {
  const { user } = useUser();
  if (user !== null) return <Redirect to="/files" />;
  return <RegisterBox />;
}
