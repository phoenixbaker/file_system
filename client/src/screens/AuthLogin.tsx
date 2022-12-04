import React from "react";

import NavBar from "../layouts/NavBar";
import { AuthLogIn } from "../features/authentication";

export default function AuthLogin() {
  return (
    <NavBar>
      <AuthLogIn />
    </NavBar>
  );
}
