import React from "react";

import NavBar from "../layouts/NavBar";
import Document from "../features/documents/index";

export default function DocumentScreen() {
  return (
    <NavBar>
      <Document />
    </NavBar>
  );
}
