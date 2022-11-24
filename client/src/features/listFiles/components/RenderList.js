import React from "react";

import RenderBox from "../../../components/ui/RenderBox";

export default function RenderList({ Header, data, onClick, JSXIcon }) {
  if (data == null) return;
  return (
    <div className="list">
      <h1>{Header}</h1>
      <li>
        {data.map((val, i) => {
          return (
            <div>
              <RenderBox
                fade={false}
                key={i}
                text={val.name}
                JSXIcon={JSXIcon}
                onClick={() => onClick(val)}
              />
            </div>
          );
        })}
      </li>
    </div>
  );
}
