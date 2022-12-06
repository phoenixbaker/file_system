import React from "react";

import { motion, Variants } from "framer-motion";

export type AnimatedParagraphType = {
  text: string;
  variants: Variants;
};

export default function AnimatedParagraph({
  text,
  variants,
}: AnimatedParagraphType) {
  return (
    <motion.div variants={variants} initial="initial" animate="animate">
      <p>{text}</p>
    </motion.div>
  );
}
