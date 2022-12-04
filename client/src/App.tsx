import "./assets/global.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { FileContextProvider } from "./context/fileContext";
import { UserContextProvider } from "./context/userContext";
import AppRoutes from "./routes";

// TODO:
// ! Write Test cases for eligible

// * Make Image shower
// * Make new RenderBox, Animate over hover with colour change
// * Make Home Page Text

function App() {
  return (
    <UserContextProvider>
      <FileContextProvider>
        <Router>
          <AppRoutes />
        </Router>
      </FileContextProvider>
    </UserContextProvider>
  );
}

export default App;
