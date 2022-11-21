import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../state/useContext";
import { AppBackground } from "../components";
import "../styles/authScreenStyles.css";
import LogInBox from "../components/LogInBox";

export default function AuthLogin() {
  const { userState } = useContext(UserContext);

  if (userState !== null) return <Redirect to="/files" />;

  return (
    <AppBackground>
      <div className="background">
        <div className="account-Box">
          <LogInBox />
        </div>
      </div>
    </AppBackground>
  );
}
