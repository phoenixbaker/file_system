import React from "react";

import RenderBox from "../../../components/ui/RenderBox";
import handleName from "../../../utils/HandleFileName";

export default function RenderPhotoList({
  Header,
  data,
  previewArr,
  onClick,
  previewLoaded = true,
}) {
  if (!previewLoaded) return;
  return (
    <div className="list">
      <h1>{Header}</h1>
      <li>
        {data.map((file, i) => {
          return (
            <div className="imgContainer">
              <RenderBox
                fade={false}
                key={i}
                text={handleName(file.filename)}
                onClick={onClick}
                JSXIcon={
                  <img
                    src={previewArr[i]}
                    style={{
                      width: 200,
                      height: 200,
                      objectFit: "scale-down",
                    }}
                    alt={file.filename}
                  />
                }
              />
            </div>
          );
        })}
      </li>
    </div>
  );
}
