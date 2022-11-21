import React, { useEffect, useState } from "react";
import { getFiles } from "../api/document";
import RenderBox from "./props/RenderBox";

export default function ListFiles() {
  const [files, setFiles] = useState(null);
  useEffect(() => {
    handleFiles();
  }, []);

  async function handleFiles() {
    const { files: res } = await getFiles();
    setFiles(res);
  }

  return (
    <div>
      {files &&
        files.map((val, i) => {
          return <RenderBox text={val._id} />;
        })}
    </div>
  );
}
