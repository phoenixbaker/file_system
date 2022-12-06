import React, { ReactNode } from "react";

type CircleOutlineProps = {
  children: ReactNode;
};

export default function CircleOutline({ children }: CircleOutlineProps) {
  return (
    <div
      style={{
        borderRadius: "100vh",
        backgroundColor: "black",
        padding: 20,
        opacity: 1,
      }}
      className="flex center"
    >
      {children}
    </div>
  );
}
