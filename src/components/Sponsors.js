import { motion } from "framer-motion";
import { logo } from "../assests";
import React, { useEffect, useState } from 'react';

export default function Sponsors() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    addAnimation();
  }, [isHovered]);

  function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");

    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <section className="relative" id="Sponsors">
      <div className="custom-shape-divider-top-1702492703">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="grid grid-rows-4 grid-cols-12 relative">
        <div className="pt-10 pl-20 flex row-start-1 col-start-1">
          <span>Commitment</span>
        </div>
        <motion.div
          className="row-start-2 col-start-3 col-span-6 row-span-1 pb-10"
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          animate={{ x: -500 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <span className="head-text ">Hear from our sponsors</span>
        </motion.div>
        <div className="flex flex-shrink row-start-3 col-start-3 col-span-3 bg-black bg-opacity-5 row-span-1 pt-10">
          Excepteur in magna officia cupidatat mollit excepteur nostrud. Ea qui occaecat culpa fugiat ipsum pariatur enim deserunt. Ea adipisicing eiusmod eiusmod voluptate aliqua reprehenderit reprehenderit culpa adipisicing excepteur qui.Officia minim adipisicing dolore aliqua dolore. Ullamco ut eu Lorem velit ad et ullamco do. Eu tempor incididunt ex officia sint.
        </div>
      </div>

      <motion.div
        className="scroller"
        data-direction="left"
        data-speed="slow"
        whileHover={{ scale: isHovered ? 1.2 : 1 }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="scroller__inner h-40 pb-44">
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
        </div>
      </motion.div>
    </section>
  );
}
