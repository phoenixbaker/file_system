import React from "react";

import "../styles/popup.css";

export default function Popup({ children, trigger, onClose }) {
  return (
    trigger && (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={onClose}>
            close
          </button>
          {children}
        </div>
      </div>
    )
  );
}
