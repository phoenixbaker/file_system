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
import handleName from "../../../utils/HandleFileName";
import RenderList from "./RenderList";
import RenderPhotoList from "./RenderPhotoList";

export default function ListFiles() {
  const { path, setPath, userState, files, setFiles } = useContext(UserContext);
  const [loaded, setLodaed] = useState(false);
  const [preview, setPreview] = useState(null);

  const history = useHistory();

  useEffect(() => {
    async function handleLaunch() {
      let res = await getDir(userState.dir[0]);
      setPath([res]);
    }
    if (path === null) handleLaunch();
  }, [path, userState, setPath]);

  useEffect(() => {
    if (path === null) return;
  }, [path]);

  useEffect(() => {
    async function handleDir() {
      const res = await getDir(path[path.length - 1]._id);
      setFiles(res);
    }

    if (path === null) return;
    handleDir();
  }, [path, setFiles]);

  useEffect(() => {
    if (files === null) return;

    async function handlePreview() {
      const promises = files.files.map(async (file, i) => {
        let res = await getPreview(file.id);
        return `data:image/png;base64,${res}`;
      });
      let tempArr = await Promise.all(promises);
      setPreview(tempArr);
      return setLodaed(true);
    }

    handlePreview();
  }, [files]);

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

      <RenderList
        Header="Directories"
        data={files?.dirs}
        onClick={(dir) => handleDirNavigation(dir)}
        JSXIcon={<UilFolder size="100" color="#f0f8ff" />}
      />
      <RenderList
        Header="Documents"
        data={files?.docs}
        onClick={(doc) => handleDocNavigation(doc)}
        JSXIcon={<UilFile size="100" color="#f0f8ff" />}
      />
      <RenderPhotoList
        Header="Files"
        data={files?.files}
        previewLoaded={loaded}
        previewArr={preview}
      />
    </div>
  );
}
