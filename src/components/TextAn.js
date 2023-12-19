import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TextBox({ text }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  // Define your animation variants
  const textBoxVariants = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { opacity: 1, filter: "blur(0)" },
  };

  // Trigger the animation when the text box is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={(element) => {
        ref(element);
      }}
      initial="hidden"
      animate={controls}
      variants={textBoxVariants}
      transition={{ duration: 1 }}
      className="text-center flex p-4 m-4 border border-gray-300"
    >
      {text}
    </motion.div>
  );
}
