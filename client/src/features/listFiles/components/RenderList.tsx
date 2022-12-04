import React, { MouseEventHandler, ReactNode } from "react";

import { FilesType } from "hooks/useFiles/types";
import RenderBox from "../../../components/ui/RenderBox";
import AnimatedRenderBox from "components/animated/AnimatedRenderBox";

// ? Change on Click to Documents || Directory Type

export type RenderListProps = {
  Header?: string;
  data?: Array<any>;
  onClick: (val: any) => any;
  JSXIcon?: ReactNode;
};

export default function RenderList({
  Header,
  data,
  onClick,
  JSXIcon,
}: RenderListProps) {
  if (!data) return null;
  return (
    <div className="list">
      <h1>{Header}</h1>
      <li>
        {data.map((val, i) => {
          return (
            <div>
              <AnimatedRenderBox
                fade={false}
                key={i}
                text={val.name}
                JSXIcon={JSXIcon}
                onClick={() => onClick && onClick(val)}
              />
            </div>
          );
        })}
      </li>
    </div>
  );
}
