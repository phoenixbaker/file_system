import {
  ReactNode,
  createContext,
  SetStateAction,
  useState,
  Dispatch,
} from "react";

import { FilesType, PathType } from "../hooks/useFiles/types";

type FileContextProviderProps = {
  children: ReactNode;
};

type FileContextType = {
  files: FilesType;
  setFiles: Dispatch<SetStateAction<FilesType>>;
  path: PathType;
  setPath: Dispatch<SetStateAction<PathType>>;
};

export const FileContext = createContext<FileContextType>(
  {} as FileContextType
);

export const FileContextProvider = ({ children }: FileContextProviderProps) => {
  const [files, setFiles] = useState<FilesType>({} as FilesType);
  const [path, setPath] = useState<PathType>([] as PathType);
  return (
    <FileContext.Provider value={{ files, setFiles, path, setPath }}>
      {children}
    </FileContext.Provider>
  );
};
