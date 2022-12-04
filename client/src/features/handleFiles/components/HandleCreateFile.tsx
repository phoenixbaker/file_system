import React, { useState, ReactNode, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";

import {
  UilFilePlus,
  UilFolderPlus,
  UilUpload,
  // @ts-ignore
} from "@iconscout/react-unicons";

import Popup from "components/ui/Popup";
import RenderBox from "components/ui/RenderBox";
import "./HandleCreateFile.css";
import { createDir } from "../services/document";
import { FileUploader } from "./FileUploader";
import useFiles from "hooks/useFiles";
import { PathType } from "hooks/useFiles/types";

export type HandleCreateFileProps = {
  children?: ReactNode;
};

type TriggerType = {
  file?: boolean;
  dir?: boolean;
  upload?: boolean;
};

export default function HandleCreateFile({ children }: HandleCreateFileProps) {
  const { path, setPath } = useFiles();
  const [name, setName] = useState("");
  const [trigger, setTrigger] = useState<TriggerType>({
    file: false,
    dir: false,
    upload: false,
  });

  const history = useHistory();

  function handleReDirect(dest: string) {
    history.push(dest);
  }

  function handleChange(evnt: ChangeEvent<HTMLInputElement>) {
    if (!evnt) return;
    const value = evnt.target.value;
    setName(value);
  }

  function handleFileSubmit() {
    if (!name.length) return false;
    handleReDirect("/new/document/" + name);
    return true;
  }

  function handleDirSubmit() {
    if (!name.length) return false;
    if (!path) return false;
    handleCreateDir();
    return true;
  }

  async function handleCreateDir() {
    const tempPath = path[path.length - 1]._id;
    if (!tempPath) return;

    const dir = await createDir(tempPath, name);
    if (!dir) return;

    let tempArr = path;
    tempArr[tempArr.length - 1] = dir;
    setPath(tempArr);
  }

  return (
    <div>
      <div className="container">
        <RenderBox
          JSXIcon={<UilUpload size="80" color="#f0f8ff" />}
          text="Upload a File"
          fade={false}
          onClick={() =>
            setTrigger({
              upload: true,
            })
          }
        />
        <RenderBox
          JSXIcon={<UilFilePlus size="80" color="#f0f8ff" />}
          text="Create a File"
          JSXNewContent={
            <div style={{ top: 100 }} className="boxContent">
              <button
                onClick={() =>
                  setTrigger({
                    file: true,
                  })
                }
              >
                <h3>Create Word Document</h3>
              </button>

              <button>
                <h3>Create Excel Document</h3>
              </button>
            </div>
          }
        />
        <RenderBox
          JSXIcon={<UilFolderPlus size="80" color="#f0f8ff" />}
          text="Create a Folder"
          fade={false}
          onClick={() =>
            setTrigger({
              dir: true,
            })
          }
        />
      </div>
      {children}
      <Popup
        trigger={trigger.file}
        onClose={() =>
          setTrigger({
            file: false,
            dir: false,
            upload: false,
          })
        }
      >
        <div className="pop-up">
          <h1>File Name</h1>
          <input
            placeholder="File Name"
            onSubmit={() => console.log("hi")}
            value={name}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              const bool = handleFileSubmit();
              if (bool) {
                setName("");
                return setTrigger({
                  file: false,
                  dir: false,
                  upload: false,
                });
              }
            }}
          >
            Create New Document
          </button>
        </div>
      </Popup>
      <Popup
        trigger={trigger.dir}
        onClose={() =>
          setTrigger({
            file: false,
            dir: false,
            upload: false,
          })
        }
      >
        <div className="pop-up">
          <h1>Folder Name</h1>
          <input
            placeholder="Input Folder Name"
            onSubmit={() => console.log("hi")}
            value={name}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              const bool = handleDirSubmit();
              if (bool) {
                setName("");
                return setTrigger({
                  file: false,
                  dir: false,
                  upload: false,
                });
              }
            }}
          >
            Create New Directory
          </button>
        </div>
      </Popup>
      <Popup
        trigger={trigger.upload}
        onClose={() =>
          setTrigger({
            file: false,
            dir: false,
            upload: false,
          })
        }
      >
        <div className="pop-up">
          <h1>Upload Your Files</h1>
          <FileUploader />
        </div>
      </Popup>
    </div>
  );
}
