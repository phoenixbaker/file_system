import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// @ts-ignore
import { UilFile, UilFolderOpen, UilFolder } from "@iconscout/react-unicons";

import { getDir, getPreview } from "../services/document";
import RenderBox from "../../../components/ui/RenderBox";

import { UserContext } from "../../../context/userContext";
import "./ListFiles.css";
import handleName from "../../../utils/HandleFileName";
import RenderList from "./RenderList";
import RenderPhotoList from "./RenderPhotoList";
import useFiles from "hooks/useFiles";
import useUser from "hooks/useUser";
import { FilesType } from "hooks/useFiles/types";

export default function ListFiles() {
  const { path, setPath, files, setFiles } = useFiles();
  const { user } = useUser();

  const [loaded, setLoaded] = useState(false);
  const [preview, setPreview] = useState<Array<string>>([] as Array<string>);

  const history = useHistory();

  useEffect(() => {
    async function handleLaunch() {
      if (!user?.dir) return;
      if (typeof user.dir[0] !== "string") return;
      let res = await getDir(user.dir[0]);
      if (!res) return;
      setPath([res]);
    }
    if (!path.length) handleLaunch();
  }, [path, user, setPath]);

  useEffect(() => {
    if (path === null) return;
  }, [path]);

  useEffect(() => {
    async function handleDir() {
      const tempPath = path[path.length - 1]._id;
      if (!tempPath) return;

      const res = await getDir(tempPath);
      if (!res) return;

      setFiles(res);
    }

    if (!path.length) return;
    handleDir();
  }, [path, setFiles]);

  useEffect(() => {
    if (files === null) return;

    async function handlePreview() {
      if (!files.files || !files.files.length) return;
      const promises = files.files.map(async (file, i) => {
        if (!file.id) return "";
        let res = await getPreview(file.id);
        return `data:image/png;base64,${res}`;
      });
      let tempArr = await Promise.all(promises);
      tempArr.filter((arr) => arr !== "");
      setPreview(tempArr);
      return setLoaded(true);
    }

    handlePreview();
  }, [files]);

  function handleDirNavigation(dir: FilesType) {
    setPath((prevArray) => [...prevArray, dir]);
  }

  function handleDirBack() {
    let elementToRemove = path[path.length - 1];
    setPath((prevArray) => prevArray.filter((dir) => dir !== elementToRemove));
  }

  function handleDocNavigation({ path, name }: { path: string; name: string }) {
    history.push(`documents/${path}/${name}`);
  }

  return (
    <div className="list-file">
      <h1>{path.length && path[path.length - 1].name}</h1>
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
        onClick={(dir: FilesType) => handleDirNavigation(dir)}
        JSXIcon={<UilFolder size="100" color="#f0f8ff" />}
      />
      <RenderList
        Header="Documents"
        data={files?.docs}
        onClick={(doc: { path: string; name: string }) =>
          handleDocNavigation(doc)
        }
        JSXIcon={<UilFile size="100" color="#f0f8ff" />}
      />
      <RenderPhotoList
        Header="Files"
        data={files.files!}
        previewLoaded={loaded}
        previewArr={preview}
      />
    </div>
  );
}
