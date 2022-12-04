import AnimatedRenderBox from "components/animated/AnimatedRenderBox";
import React, { MouseEventHandler } from "react";

import RenderBox from "../../../components/ui/RenderBox";
import handleName from "../../../utils/HandleFileName";

export type RenderPhotoListType = {
  Header?: string;
  data: Array<any>;
  previewArr: Array<any>;
  onClick?: MouseEventHandler;
  previewLoaded?: boolean;
};

export default function RenderPhotoList({
  Header,
  data,
  previewArr,
  onClick,
  previewLoaded = true,
}: RenderPhotoListType) {
  if (!previewLoaded) return null;
  return (
    <div className="list">
      <h1>{Header}</h1>
      <li>
        {data.map((file, i) => {
          return (
            <div className="imgContainer">
              <AnimatedRenderBox
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
