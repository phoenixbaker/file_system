import { useContext } from "react";

import { FileContext } from "context/fileContext";

export default function useFiles() {
  const { files, path, setFiles, setPath } = useContext(FileContext);
  return { files, path, setFiles, setPath };
}
