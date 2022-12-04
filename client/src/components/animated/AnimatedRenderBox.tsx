import React from "react";

import { motion } from "framer-motion";
import RenderBox, { RenderBoxProps } from "components/ui/RenderBox";

export type AnimationRenderBoxProps = {
  text: RenderBoxProps["text"];
  JSXIcon?: RenderBoxProps["JSXIcon"];
  fade?: RenderBoxProps["fade"];
  onClick?: RenderBoxProps["onClick"];
  JSXNewContent?: RenderBoxProps["JSXNewContent"];
  img?: RenderBoxProps["img"];
};

export default function AnimatedRenderBox({
  JSXIcon,
  text,
  onClick,
  JSXNewContent,
  img,
}: AnimationRenderBoxProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        style: {
          borderColor: "#000",
        },
      }}
    >
      <RenderBox
        text={text}
        JSXIcon={JSXIcon}
        fade={false}
        onClick={onClick}
        JSXNewContent={JSXNewContent}
        img={img}
      />
    </motion.div>
  );
}
