import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";

import "../assets/global.css";

export default function AppBackground({ children }) {
  const { userState, setUserState } = useContext(UserContext);
  const history = useHistory();

  function handleReDirect(dest) {
    history.push(dest);
  }

  return (
    <div className="Background">
      <nav className="navbar">
        <div className="Header-Containter">
          <button className="Margin-2" onClick={() => handleReDirect("/")}>
            <h1 className="Header1">FSCloud</h1>
          </button>
          <button
            className="Margin-10"
            onClick={() => handleReDirect("/files")}
          >
            <h1 className="Header2">Files</h1>
          </button>
        </div>
        <div className="Header-Containter Account-Container">
          {userState === null ? (
            <button onClick={() => handleReDirect("/auth/login")}>
              <h1 className="Header1">Account</h1>
            </button>
          ) : (
            <button
              onClick={() => {
                localStorage.clear();
                setUserState(null);
                return handleReDirect("/");
              }}
            >
              <h1 className="Header1">{userState.name}</h1>
            </button>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
}
