import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { graph, image1, image2, image3 } from "../assests"; // Fix typo in "assets"
import Modal from "./Modal";
import useModal from "./hooks/modalHook";
import HorizontalScrollCarousel from "./HorizontalScroll";

// Custom hook for parallax effect
function useParallax(value, distance) {
    return useTransform(value, [0.3, 0.8], [-distance, distance * 50]);
}


function Image({ id }) {
    const { modalOpen, close, open } = useModal();



    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 100);
    const text = [
        "Aute excepteur amet ipsum est in pariatur cupidata .",
        "Aute excepteur amet ipsum est in pariatur cupidata .",
        "Aute excepteur amet ipsum est in pariatur cupidata ."
    ];
    const image=[image1,image2,image3];

    return (
        <>
            <div className="pt-20 flex flex-col max-h-max max-w-max h-max w-max">
                <div ref={ref} className=" flex max-w-fit max-h-fit h-full w-full pb-16">
                    <motion.button
                        className=" flex-auto h-full w-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                        <img src={graph} alt="A London skyscraper" />
                    </motion.button>


                </div>
                <motion.div style={{ y }} className="flex flex-auto text-4xl pt-20 pb-44 ">
                    {text[id]}
                </motion.div>


            </div>
            <div className="section absolute">   {modalOpen && <Modal className="section bg-black" handleClose={close} text={'Mollit laboris eu ea ipsum nulla magna ut et officia sunt minim sunt do.Ex esse velit ad nulla proident. Laborum esse nostrud dolor laboris sunt do. Reprehenderit dolore consectetur consectetur nostrud aliquip sunt esse cupidatat commodo et aliquip tempor sint pariatur.'} />}</div>
        </>

    );
}

export default function Services() {

    const { scrollYProgress } = useScroll();


    return (
        <section className="relative bg-transparent " id="Services">

            {/* <div class="custom-shape-divider-top-1702476858">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-bottom-1702491588">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                </svg>
            </div>
 */}

            <div className="grid grid-cols-12 grid-rows-3 pb-20">
                {/* <div className="row-start-1 col-start-1 pt-10 pl-10">Our solution</div> */}
                <div className="row-start-2 col-start-4 text-[38px] col-span-5 row-span-2 flex flex-col items-center gap-0 pt-20 pl-28">
                    What we offer you
                </div>
                {/* <div className="row-start-3 col-start-4 col-span-5 bg-black bg-opacity-5 row-span-2 pl-14 flex flex-col items-center gap-0 pt-5">
                    Excepteur in magna officia cupidatat mollit excepteur nostrud. Ea qui occaecat culpa fugiat ipsum pariatur enim deserunt. Ea adipisicing eiusmod eiusmod voluptate aliqua reprehenderit reprehenderit culpa adipisicing excepteur qui. Officia minim adipisicing dolore aliqua dolore. Ullamco ut eu Lorem velit ad et ullamco do. Eu tempor incididunt ex officia sint.
                </div> */}

            </div>
            {/* <div className="flex flex-col flex-auto pl-6">
                <div className=" flex flex-auto ">
                    {[0, 1, 2].map((image) => (
                        <Image key={image} id={image} className="flex-auto" />
                    ))}
                </div>
            </div> */}
            <HorizontalScrollCarousel />

        </section>
    );
}
