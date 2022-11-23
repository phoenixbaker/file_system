import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { UilFile } from "@iconscout/react-unicons";
import { UilFolder } from "@iconscout/react-unicons";
import { UilFolderOpen } from "@iconscout/react-unicons";

import { getDir } from "../../handleFiles/services/document";
import RenderBox from "../../../components/ui/RenderBox";

import { UserContext } from "../../../context/userContext";
import "./ListFiles.css";
import { getPreview } from "../../handleFiles/services/upload";

export default function ListFiles() {
  const { path, setPath, userState, setUserState } = useContext(UserContext);
  const [files, setFiles] = useState(null);
  const [loaded, setLodaed] = useState(false);
  const [preview, setPreview] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (path === null) handleLaunch();
  }, []);

  useEffect(() => {
    handleDir();
  }, [path]);

  useEffect(() => {
    if (files === null) return;
    handlePreview();
  }, [files]);

  async function handleLaunch() {
    let res = await getDir(userState.dir[0]);
    setPath([res]);
  }

  async function handleDir() {
    if (path === null) return;
    const res = await getDir(path[path.length - 1]._id);
    setFiles(res);
  }

  function handleDirNavigation(dir) {
    setPath((prevArray) => [...prevArray, dir]);
  }

  function handleDirBack() {
    let elementToRemove = path[path.length - 1];
    setPath((prevArray) => prevArray.filter((dir) => dir !== elementToRemove));
  }

  function handleDocNavigation({ path, name }) {
    history.push(`documents/${path}/${name}`);
  }

  async function handlePreview() {
    const promises = files.files.map(async (file, i) => {
      let res = await getPreview(file.id);
      return `data:image/png;base64,${res}`;
    });
    let tempArr = await Promise.all(promises);
    setPreview(tempArr);
    return setLodaed(true);
  }

  return (
    <div className="list-file">
      <h1>{path && path[path.length - 1].name}</h1>
      {path?.length > 1 && (
        <RenderBox
          fade={false}
          text="..."
          JSXIcon={<UilFolderOpen size="100" color="#f0f8ff" />}
          onClick={() => handleDirBack()}
        />
      )}
      {files?.dirs &&
        files.dirs.map((dir, i) => {
          return (
            <>
              <h1 style={{ alignSelf: "flex-start" }}>Directories</h1>
              <RenderBox
                fade={false}
                key={i}
                text={dir.name}
                JSXIcon={<UilFolder size="100" color="#f0f8ff" />}
                onClick={() => handleDirNavigation(dir)}
              />
            </>
          );
        })}
      {files?.docs &&
        files.docs.map((doc, i) => {
          return (
            <>
              <h1 style={{ alignSelf: "flex-start" }}>Documents</h1>
              <RenderBox
                fade={false}
                text={doc.name}
                JSXIcon={<UilFile size="100" color="#f0f8ff" />}
                onClick={() => handleDocNavigation(doc)}
              />
            </>
          );
        })}
      {files?.files &&
        loaded &&
        files.files.map((file, i) => {
          return (
            <>
              <h1 style={{ alignSelf: "flex-start" }}>Files</h1>
              <RenderBox
                fade={false}
                key={i}
                text={file.filename}
                JSXIcon={<img src={preview[i]} width="200" />}
              />
            </>
          );
        })}
    </div>
  );
}
