import "./assets/global.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { UserContext } from "./context/userContext";
import AppRoutes from "./routes/index.js";

function App() {
  const [userState, setUserState] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [path, setPath] = useState(null);

  return (
    <UserContext.Provider value={{ userState, setUserState, path, setPath }}>
      <Router>
        <AppRoutes />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
