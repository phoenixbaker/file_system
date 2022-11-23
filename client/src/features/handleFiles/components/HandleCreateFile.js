import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { UilFilePlus } from "@iconscout/react-unicons";
import { UilFolderPlus } from "@iconscout/react-unicons";
import { UilUpload } from "@iconscout/react-unicons";

import Popup from "../../../components/ui/Popup";
import RenderBox from "../../../components/ui/RenderBox";
import "./HandleCreateFile.css";
import { createDir } from "../services/document";
import { UserContext } from "../../../context/userContext";
import { FileUploader } from "./FileUploader";

export default function HandleCreateFile({ children }) {
  const { path, setPath } = useContext(UserContext);
  const [name, setName] = useState(null);
  const [trigger, setTrigger] = useState({
    file: false,
    dir: false,
    upload: false,
  });
  const history = useHistory();
  function handleReDirect(dest) {
    history.push(dest);
  }

  function handleChange(evnt) {
    const value = evnt.target.value;
    setName(value);
  }

  function handleFileSubmit() {
    if (!name.length) return;
    handleReDirect("/new/document/" + name);
  }

  function handleDirSubmit() {
    if (!name.length) return;
    if (!path) return;
    handleCreateDir();
  }

  async function handleCreateDir() {
    const dir = await createDir(path[path.length - 1]._id, name);
    // console.log("from createDir | new Dir");
    // console.log(dir);
    setPath([dir]);
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
          <button onClick={() => handleFileSubmit()}>
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
          <button onClick={() => handleDirSubmit()}>
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
