import React, { ReactNode, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";

import "../assets/global.css";
import useUser from "hooks/useUser";

export default function AppBackground({ children }: { children: ReactNode }) {
  // const { userState, setUserState } = useContext(UserContext);
  const { user, setUser } = useUser();
  const history = useHistory();

  function handleReDirect(dest: string) {
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
          {user === null ? (
            <button onClick={() => handleReDirect("/auth/login")}>
              <h1 className="Header1">Account</h1>
            </button>
          ) : (
            <button
              onClick={() => {
                localStorage.clear();
                setUser(null);
                return handleReDirect("/");
              }}
            >
              <h1 className="Header1">{user.name}</h1>
            </button>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
}
