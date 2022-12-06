import React from "react";

import AnimatedHomeBackground from "./animated/AnimatedHomeBackground";
import AnimatedParagraph from "./animated/AnimatedParagraph";
import AnimatedTitle from "./animated/AnimatedTitle";

import "./HomeContent.css";

export default function HomeContent() {
  return (
    <div>
      <div className="titleContainer flex flex-column zindex1">
        <div className="absolute center flex-column" style={{ top: 0 }}>
          <AnimatedTitle
            title="FSCLOUD"
            containerVariants={{
              animate: {
                transition: {
                  staggerChildren: 0.14,
                },
              },
            }}
            letterVariants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
            }}
          />
          <div className="width75">
            <AnimatedParagraph
              text="This is my Personal Project FSCloud. It is a cloud storage system, similar to Google Drive, but with different features. It is currently being developed and has not reached a beta version yet. Still, you can play around with it during development."
              variants={{
                initial: {
                  opacity: 0,
                  y: 30,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1.3,
                    duration: 1.5,
                  },
                },
              }}
            />
            <AnimatedParagraph
              text="This project is aimed to enhance my UI-Design, and my integration with ReactJS and Back-End Services"
              variants={{
                initial: {
                  x: "-100vw",
                },
                animate: {
                  x: 0,
                  transition: {
                    duration: 2.5,
                    delay: 2.2,
                  },
                },
              }}
            />
          </div>
        </div>
        <AnimatedHomeBackground />
      </div>
    </div>
  );
}
