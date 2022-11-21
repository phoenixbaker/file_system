import React, { useState, useRef } from "react";
import { animated, useSpring } from "react-spring";
import "../../styles/renderBoxStyle.css";

export default function RenderBox({
  JSXIcon,
  text,
  fade = true,
  onClick,
  JSXNewContent,
}) {
  const [isShown, setIsShown] = useState(false);
  const boxRef = useRef();

  if (!fade) {
    return (
      <button className="fileBox" onClick={onClick}>
        {JSXIcon}
        <h2>{text}</h2>
      </button>
    );
  }

  const Fade = ({ children, springStyle }) => {
    const styles = useSpring(springStyle);

    return <animated.div style={styles}>{children}</animated.div>;
  };

  return (
    <button
      className="fileBox"
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
      ref={boxRef}
    >
      {!isShown ? (
        <div>
          {JSXIcon}
          <h2>{text}</h2>
        </div>
      ) : (
        <>
          <Fade
            springStyle={{
              from: {
                opacity: 1,
              },
              to: {
                opacity: 0,
              },
            }}
          >
            {JSXIcon}
            <h2>{text}</h2>
          </Fade>
          <Fade
            springStyle={{
              from: {
                opacity: 0,
              },
              to: {
                opacity: 1,
              },
              delay: 250,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: boxRef.current.offsetTop + 20,
                left: boxRef.current.offsetLeft + 20,
                alignSelf: "center",
              }}
            >
              {JSXNewContent}
            </div>
          </Fade>
        </>
      )}
    </button>
  );
}
