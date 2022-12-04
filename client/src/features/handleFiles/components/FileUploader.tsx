import useFiles from "hooks/useFiles";
import { FilesType } from "hooks/useFiles/types";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { uploadFormData } from "../services/upload";

import "./FileUploader.css";

export const FileUploader = () => {
  const { path, setFiles } = useFiles();
  const [selectedFiles, setSelectedFile] =
    useState<HTMLInputElement["files"]>();
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setSelectedFile(target.files);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFiles) return;
    let data = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      data.append("files", selectedFiles[i]);
    }
    const tempId = path[path.length - 1]._id;
    if (!tempId) return;

    const newFiles = await uploadFormData(data, tempId);
    setFiles(newFiles as FilesType);
  };

  return (
    <form method="post" action="#" id="#" onSubmit={onSubmit}>
      <div className="form-group-uploader">
        <input type="file" multiple onChange={onInputChange} />
        <button> Submit </button>
      </div>
    </form>
  );
};
