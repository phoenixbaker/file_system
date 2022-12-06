import React, { useState } from "react";

import { motion, Variants } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  letterVariants?: Variants;
  containerVariants?: Variants;
}

export default function AnimatedTitle({
  title,
  letterVariants,
  containerVariants,
}: AnimatedTitleProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex width100 flex-row">
        {[...title].map((val) => {
          return (
            <motion.span variants={letterVariants}>
              <h1>{val}</h1>
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
