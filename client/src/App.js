import "./styles/index.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { UserContext } from "./state/useContext";
import AppRoutes from "./routes/index.js";

function App() {
  const [userState, setUserState] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <Router>
        <AppRoutes />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
