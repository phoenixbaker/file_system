import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../state/useContext";
import { AppBackground, HandleCreateFile, ListFiles } from "../components";
import "../styles/FilesScreenStyle.css";

export default function FilesScreen() {
  const { userState } = useContext(UserContext);
  console.log(userState);
  if (userState === null) return <Redirect to="/auth/login" />;

  return (
    <AppBackground>
      <HandleCreateFile>
        <ListFiles />
      </HandleCreateFile>
    </AppBackground>
  );
}
