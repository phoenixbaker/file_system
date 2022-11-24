import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { uploadFormData } from "../services/upload";

import "./FileUploader.css";

export const FileUploader = () => {
  const { path, setFiles } = useContext(UserContext);
  const [selectedFiles, setSelectedFile] = useState(null);
  const onInputChange = (e) => {
    setSelectedFile(e.target.files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      data.append("files", selectedFiles[i]);
    }
    const newFiles = await uploadFormData(data, path[path.length - 1]._id);
    setFiles(newFiles);
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
