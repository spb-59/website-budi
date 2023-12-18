import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AnimatedImage({ src, alt }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  // Define your image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Trigger the animation when the image is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      initial="hidden"
      animate={controls}
      variants={imageVariants}
      transition={{ duration: 0.5 }}
      className="w-3/4"
    />
  );
}
