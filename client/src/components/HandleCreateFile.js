import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { UilFilePlus } from "@iconscout/react-unicons";
import { UilFolderPlus } from "@iconscout/react-unicons";
import { UilUpload } from "@iconscout/react-unicons";

import Popup from "./Popup";
import "../styles/FilesScreenStyle.css";
import RenderBox from "./props/RenderBox";

export default function HandleCreateFile({ children }) {
  const [name, setName] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const history = useHistory();
  function handleReDirect(dest) {
    history.push(dest);
  }

  function handleChange(evnt) {
    const value = evnt.target.value;
    setName(value);
  }

  function handleSubmit() {
    if (!name.length()) return;
    handleReDirect("/new/document/" + name);
  }

  return (
    <div>
      <div className="container">
        <RenderBox
          JSXIcon={<UilUpload size="100" color="#f0f8ff" />}
          text="Upload a File"
          fade={false}
        />
        <RenderBox
          JSXIcon={<UilFilePlus size="100" color="#f0f8ff" />}
          text="Create a File"
          JSXNewContent={
            <div style={{ top: 100 }} className="boxContent">
              <button onClick={() => setTrigger(true)}>
                <h3>Create Word Document</h3>
              </button>

              <button>
                <h3>Create Excel Document</h3>
              </button>
            </div>
          }
        />
        <RenderBox
          JSXIcon={<UilFolderPlus size="100" color="#f0f8ff" />}
          text="Create a Folder"
          fade={false}
        />
      </div>
      {children}
      <Popup trigger={trigger} onClose={() => setTrigger(false)}>
        <h1 style={{ color: "white" }}>File Name</h1>
        <input
          placeholder="File Name"
          onSubmit={() => console.log("hi")}
          value={name}
          onChange={handleChange}
        />
        <button onClick={() => handleSubmit()}>Create New Document</button>
      </Popup>
    </div>
  );
}
