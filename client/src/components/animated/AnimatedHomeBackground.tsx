import React, { ReactNode } from "react";
// @ts-ignore
import {
  AiFillFolderOpen,
  AiFillFileImage,
  AiFillFileWord,
  AiOutlineUpload,
} from "react-icons/ai";

import { motion } from "framer-motion";
import CircleOutline from "components/ui/CircleOutline";

import "./AnimatedHomeBackground.css";

export default function AnimatedHomeBackground({}) {
  return (
    <div
      className="zindex0 width100 AnimatedBackgroundContainer-Home"
      style={{ height: "80vh" }}
    >
      <motion.button
        className="transparentButton"
        whileHover={{
          rotate: 0,
          scale: 1.2,
        }}
        initial={{ y: "100vh", opacity: 0, x: "50vw" }}
        animate={{
          y: 50,
          x: 50,
          opacity: 0.5,
          rotate: -25,
          transition: {
            duration: 1.3,
            delay: 1.3,
          },
        }}
      >
        <CircleOutline>
          <AiFillFolderOpen size={150} color="#2ca7ee" />
        </CircleOutline>
      </motion.button>
      <motion.button
        className="transparentButton"
        initial={{ y: "100vh", opacity: 0, x: "50vw" }}
        animate={{
          y: "70vh",
          x: 50,
          opacity: 0.5,
          rotate: -12,
          transition: {
            duration: 1.3,
            delay: 1.3,
          },
        }}
        whileHover={{
          scale: 1.2,
          rotate: 0,
        }}
      >
        <CircleOutline>
          <AiFillFileImage size={150} color="#2ca7ee" />
        </CircleOutline>
      </motion.button>
      <motion.button
        className="absolute transparentButton"
        initial={{ top: "100vh", x: "50vw", opacity: 0 }}
        animate={{
          top: "60vh",
          rotate: 25,
          opacity: 0.5,
          x: "80vw",
          transition: {
            duration: 1.3,
            delay: 1.3,
          },
        }}
        whileHover={{
          scale: 1.2,
          rotate: 0,
        }}
      >
        <CircleOutline>
          <AiFillFileWord size={150} color="#2ca7ee" />
        </CircleOutline>
      </motion.button>
      <motion.button
        className="absolute transparentButton"
        whileHover={{
          scale: 1.2,
          rotate: 0,
        }}
        initial={{ top: "100vh", x: "50vw", opacity: 0 }}
        animate={{
          top: "20vh",
          rotate: 15,
          opacity: 0.5,
          x: "90vw",
          transition: {
            duration: 1.3,
            delay: 1.3,
          },
        }}
      >
        <CircleOutline>
          <AiOutlineUpload size={150} color="#2ca7ee" />
        </CircleOutline>
      </motion.button>
    </div>
  );
}
