import useUser from "hooks/useUser";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../context/userContext";
import HandleCreateFile from "../features/handleFiles/components/HandleCreateFile";
import ListFiles from "../features/listFiles/components/ListFiles";
import NavBar from "../layouts/NavBar";

export default function FilesScreen() {
  const { user } = useUser();
  if (!user) return <Redirect to="/auth/login" />;

  return (
    <NavBar>
      <HandleCreateFile>
        <ListFiles />
      </HandleCreateFile>
    </NavBar>
  );
}
