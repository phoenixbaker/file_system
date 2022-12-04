import React, { MouseEventHandler, ReactNode } from "react";

import "./popup.css";

export type PopUpType = {
  children?: ReactNode;
  trigger?: boolean;
  onClose?: MouseEventHandler;
};

export default function Popup({ children, trigger, onClose }: PopUpType) {
  if (!trigger) return <div></div>;
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          close
        </button>
        {children}
      </div>
    </div>
  );
}
