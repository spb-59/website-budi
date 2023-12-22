import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Counter({ num, end, text, sign }) {
    const count = useMotionValue(num);
    const rounded = useTransform(count, Math.round);
    const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
        let animation;

        if (inView) {
            // Start animation when in view
            animation = animate(count, end, { duration: 3 });
        } else {
            // Reset count when out of view
            count.set(0);
        }

        return () => {
            // Stop animation on unmount
            if (animation) {
                animation.stop();
            }
        };
    }, [inView, count, end]);
    return <div className="flex flex-auto flex-col"><div className="flex"><motion.h1 ref={ref}>{rounded}</motion.h1><span className=" text-center font-counter text-black">{sign}</span></div><span className="text-center text-2xl">{text}</span></div>;
}
