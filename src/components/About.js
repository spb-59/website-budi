import { motion, Variants } from "framer-motion";
import Counter from "./Counter";

export default function About() {

    const cardVariants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 50,
            rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <section
            id="About"
            className='section'

        >


            <div className="grid grid-rows-6 grid-cols-12 relative w-full h-full">

         
                <motion.div
                    className="row-start-1 col-start-3 col-span-6 row-span-1 pb-10"

                    initial={{ x: -1000 }}
                    whileInView={{ x: 0 }}
                    animate={{ x: -500 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >

                    <span className="head-text ">
                        We're here to revolusionise your retail experience
                    </span>
                </motion.div>

                <div className="flex flex-shrink row-start-3 col-start-3 col-span-3 bg-black bg-opacity-5 row-span-1 pt-10">
                    Excepteur in magna officia cupidatat mollit excepteur nostrud. Ea qui occaecat culpa fugiat ipsum pariatur enim deserunt. Ea adipisicing eiusmod eiusmod voluptate aliqua reprehenderit reprehenderit culpa adipisicing excepteur qui.Officia minim adipisicing dolore aliqua dolore. Ullamco ut eu Lorem velit ad et ullamco do. Eu tempor incididunt ex officia sint.


                </div>

                <div className="row-start-3 col-start-7 row-span-1 ">
                    <Counter num={50} end={92} sign={"%"} text={"Cart Abandoned"} />
                </div>

                <div className="row-start-4 col-start-7 row-span-1 ">
                    <Counter num={50} end={130} text={"Revenue Lost"} sign={'m'} />
                </div>

                <div class="custom-shape-divider-bottom-1702476687">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>









            </div>
        </section>
    )
}