import React, { useState, useRef, MouseEventHandler, ReactNode } from "react";
import { animated, useSpring, UseSpringProps } from "react-spring";
import "./renderBox.css";

// ! REDO THIS WHOLE DOC

export type RenderBoxProps = {
  JSXIcon?: ReactNode;
  text: string;
  fade?: boolean;
  onClick?: MouseEventHandler;
  JSXNewContent?: ReactNode;
  img?: ReactNode | boolean;
};

export type FadeProps = {
  children: ReactNode;
  springStyle: UseSpringProps;
};

export default function RenderBox({
  JSXIcon,
  text,
  fade = true,
  onClick,
  JSXNewContent,
  img = false,
}: RenderBoxProps) {
  const [isShown, setIsShown] = useState(false);
  const boxRef = useRef<HTMLButtonElement>(null!);

  if (!fade) {
    return (
      <button className="fileBox" onClick={(e) => onClick && onClick(e)}>
        <div className="JSXContainer">{img ? img : JSXIcon}</div>
        <h2>{text}</h2>
      </button>
    );
  }

  const Fade = ({ children, springStyle }: FadeProps) => {
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
          <div>{JSXIcon}</div>
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
