import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedImage from "./ImageAn";
import { graph, image1, image2, image3 } from "../assests";
import TextBoxScroll from "./scrollRextBox";

export default function HorizontalScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-550%"]);

    return (
        <div ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-32 left-20 h-[120vh] overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20 h-[50vh] min-w-[150vh]">
                    <AnimatedImage src={image3} />
                    <TextBoxScroll text={'Excepteur ad amet ad consequat excepteur labore labore ad est.'} textD={'Magna magna quis ullamco ex veniam elit eu aliqua. Ut aliquip ullamco anim non. Laboris ut eiusmod cillum excepteur irure. Enim ea cillum ex consectetur minim commodo proident aliquip nostrud est occaecat. Nulla anim exercitation dolor dolore. Esse tempor ut incididunt laborum reprehenderit consequat dolor culpa officia ipsum.'} />


                    <AnimatedImage src={image2} />
                    <TextBoxScroll text={'Excepteur ad amet ad consequat excepteur labore labore ad est.'} textD={'Magna magna quis ullamco ex veniam elit eu aliqua. Ut aliquip ullamco anim non. Laboris ut eiusmod cillum excepteur irure. Enim ea cillum ex consectetur minim commodo proident aliquip nostrud est occaecat. Nulla anim exercitation dolor dolore. Esse tempor ut incididunt laborum reprehenderit consequat dolor culpa officia ipsum.'} />
                    <AnimatedImage src={image1} />
                    <TextBoxScroll text={'Excepteur ad amet ad consequat excepteur labore labore ad est.'} textD={'Magna magna quis ullamco ex veniam elit eu aliqua. Ut aliquip ullamco anim non. Laboris ut eiusmod cillum excepteur irure. Enim ea cillum ex consectetur minim commodo proident aliquip nostrud est occaecat. Nulla anim exercitation dolor dolore. Esse tempor ut incididunt laborum reprehenderit consequat dolor culpa officia ipsum.'} />
                    <AnimatedImage src={graph} />
                    <TextBoxScroll text={'Excepteur ad amet ad consequat excepteur labore labore ad est.'} textD={'Magna magna quis ullamco ex veniam elit eu aliqua. Ut aliquip ullamco anim non. Laboris ut eiusmod cillum excepteur irure. Enim ea cillum ex consectetur minim commodo proident aliquip nostrud est occaecat. Nulla anim exercitation dolor dolore. Esse tempor ut incididunt laborum reprehenderit consequat dolor culpa officia ipsum.'} />





                </motion.div>

            </div>
        </div>
    );
};

