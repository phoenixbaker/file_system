import React from "react";

import NavBar from "../layouts/NavBar";
import { AuthRegister } from "../features/authentication";

export default function RegisterScreen() {
  return (
    <NavBar>
      <AuthRegister />
    </NavBar>
  );
}
