import "./page.css";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

import { image1, image2, image3, graph } from "../../assests";

function Item({ onInViewChange, text, index, title }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  function checkInView() {
    const isInView = 0.2 < scrollYProgress.get() && scrollYProgress.get() < 0.9;
    setInView(isInView);
    if (index === 0 && scrollYProgress.get() < 0.9) { setInView(true); }

    // Call the callback function to update the parent state
    onInViewChange(isInView);
  }

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", checkInView);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Render the component
  return (
    <div className="flex items-center">
      <div
        ref={ref}
        style={{ opacity: inView ? 1 : 0.2 }}
        className="flex flex-col min-h-[40vh] gap-5 md:w-full pb-10 items-center"
      >
        <div className="flex flex-col w-full font-bold text-[24px]  items-start" >
          <div className="w-full h-full  numCircle">{index + 1}</div>
          <div className="h-[10px] border-b border-[#1111112f] w-full"></div>

        </div>
        <div className="flex w-full font-bold text-[40px] "> {title}</div>

        <div className="whitespace-pre-line text-balance text-[18px] ">
          {text}
        </div>

      </div>
    </div>
  );
}

export default function Page() {
  const [itemInViewStates, setItemInViewStates] = useState(Array(4).fill(false));
  const [currImg, setCurrImg] = useState(image1);
  const images = [image1, image2, image3, graph];

  function handleInViewChange(index, isInView) {
    // Update the state array to reflect the inView state of each Item
    setItemInViewStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = isInView;
      return newStates;
    });
    if (isInView) setCurrImg(images[index]);
  }
  const titles = ["It all starts with the Budi Platform",
    "The ultimate one stop shop-Shopify App",
    "Build with a flight plan for profability",
    "Sealing it off with an unforgettable Pickup experience"]

  const texts = [
    "The place where your customers create & join sessions, share with mates and celebrate others. The Budi Platform is filled with opportunities for your Gen Z audience to shop with sessions. Every time they join a session, they gain unbeatable Budi perks - free shipping, discounts and more. \n \nSession cycles you choose that fits you and your brand best, changeable anytime within your Shopify app.",
    "Life's messy enough, this doesn't have to be. Keep tabs of orders new and old, all only one click away to fulfilment.\n\nChange discount amounts, session information here.",
    "As the platform highlights your brand to its truest form, our app fights just as hard to give you unbeatable rates for fulfilment. Giving a super hand to sales and operations at the same time.",
    "The jobs not done just yet. Our locker system and booths are expertly placed throughout University campus to give your customers the best handoff of their goodies. An end of the cycle ready to repeat again!\n\n Because who can resist - Free Shipping, discount and convenient pick up? We know we cant!"

  ]






  return (
    <section className="flex flex-col  items-center justify-center pb-56">

      <div className="flex flex-col  relative bg-inherit pb-40 pt-20 items-center">

        <div className="text-[22px] md:text-[38px] font-black">
          How we help you
        </div>

      </div>



      <div className="xl:hidden flex flex-col gap-7 items-center">
        {/* //one component */}
        <div className="flex-col items-center w-4/5 " >
          <div className="w-full min-h-[20vh] items-center justify-center">
            <img src={images[0]} className="flex object-scale-down w-[80vw] h-[45vh]"></img>

          </div>
          <div className="flex flex-col  font-bold text-[40px]  items-center w-full" >
            <div className="flex flex-col w-full font-bold text-[24px] md:items-center  items-start" >
              <div className="w-full h-full  numCircle">1</div>
              <div className="h-[10px] border-b border-black w-full"></div>

            </div>

            <div className="">{titles[0]} </div>
          </div>
          <div className="whitespace-pre-line text-balance text-[14px] ">
            {texts[0]}
          </div>
        </div>

        {/* //one component */}
        <div className="flex-col items-center w-4/5 " >
          <div className="w-full min-h-[20vh]">
            <img src={images[1]} className="flex object-scale-down w-[80vw] h-[45vh] "></img>

          </div>
          <div className="flex flex-col  font-bold text-[40px]  items-center w-full" >
            <div className="flex flex-col w-full font-bold text-[24px] md:items-center  items-start" >
              <div className="w-full h-full  numCircle">2</div>
              <div className="h-[10px] border-b border-black w-full"></div>

            </div>
            <div className="">{titles[1]} </div>
          </div>

          <div className="whitespace-pre-line text-balance text-[14px] ">
            {texts[1]}
          </div>
        </div>
        {/* 
          //one component */}
        <div className="flex-col items-center w-4/5  " >
          <div className="w-full min-h-[20vh]">
            <img src={images[2]} className="flex object-scale-down w-[80vw] h-[45vh] "></img>

          </div>

          <div className="flex flex-col  font-bold text-[40px]  items-center w-full" >
            <div className="flex flex-col w-full font-bold text-[24px] md:items-center  items-start" >
              <div className="w-full h-full  numCircle">3</div>
              <div className="h-[10px] border-b border-black w-full"></div>

            </div>
            <div className="">{titles[2]} </div>
          </div>

          <div className="whitespace-pre-line text-balance text-[14px] ">
            {texts[2]}
          </div>
        </div>

        {/* //one component */}
        <div className="flex-col items-center w-4/5 " >
          <div className="w-full min-h-[20vh]">
            <img src={images[3]} className="flex object-scale-down w-[80vw] h-[45vh] "></img>

          </div>

           <div className="flex flex-col  font-bold text-[40px]  items-center w-full" >
            <div className="flex flex-col w-full font-bold text-[24px] md:items-center  items-start" >
              <div className="w-full h-full  numCircle">4</div>
              <div className="h-[10px] border-b border-black w-full"></div>

            </div>

            <div className="">{titles[3]} </div>
          </div>

          <div className="whitespace-pre-line text-balance text-[14px] ">
            {texts[3]}
          </div>
        </div>



      </div>
















      <div className="xl:flex hidden   flex-row relative lg:w-3/5 gap-36">
        <div className="flex flex-col items-center w-1/2">
          {[...Array(4)].map((_, index) => (
            <Item key={index} onInViewChange={(isInView) => handleInViewChange(index, isInView)} text={texts[index]} index={index} title={titles[index]} />
          ))}
        </div>
        <img src={currImg} className="flex w-1/2 h-max sticky top-56 bottom-56 "></img>
      </div>
    




    </section >
  );
}
