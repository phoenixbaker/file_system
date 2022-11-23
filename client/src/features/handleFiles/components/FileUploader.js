import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { uploadFormData } from "../services/upload";

import "./FileUploader.css";

export const FileUploader = ({}) => {
  const { path } = useContext(UserContext);
  const [file, setFile] = useState(null);
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("files", file);
    await uploadFormData(data, path[path.length - 1]._id);
  };

  return (
    <form method="post" action="#" id="#" onSubmit={onSubmit}>
      <div className="form-group-uploader">
        <input type="file" multiple="" onChange={onInputChange} />
        <button> Submit </button>
      </div>
    </form>
  );
};
