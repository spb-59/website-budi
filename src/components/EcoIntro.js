import { web } from "../assests";
import React, { useEffect, useRef } from 'react';

import { Link } from "react-router-dom";


export default function InrtoEco() {

    const introRef = useRef(null);

    function changeBgColorSmoothly() {
        var appElement = document.querySelector('.App');
        // appElement.classList.add('transparent-bg');
        appElement.classList.add('transparent-bg');
    }

    function changeBgColorSmoothlyTrans() {
        var appElement = document.querySelector('.App');
        appElement.classList.remove('transparent-bg');
    }

    useEffect(() => {
        let timeoutId;
        // const introRefCurrent = introRef.current; // Create a variable to hold the current value of introRef


        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timeoutId = setTimeout(() => {

                        changeBgColorSmoothly(); // Add the class when visible
                    }, 300);
                } else {
                    clearTimeout(timeoutId);

                    changeBgColorSmoothlyTrans(); // Remove the class when not visible
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (introRef.current) {
            observer.observe(introRef.current);
        }

        return () => {
            // if (introRef.current) {
            //     observer.unobserve(introRef.current);
            // }
        };
    }, []);
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

    };

    return (
        <section className="relative lg:grid grid-rows-6 grid-cols-12 pb-5 h-[100vh] min-[1280px]:h-[130vh] min-[1280px]:pb-10 " ref={introRef} >


            <div className="absolute md:top-[-15%]  top-[-20%] min-[1280px]:top-[-5%] z-0 flex-auto  items-center ">
                <img src={web} alt="web" className="im-size overflow-clip min-[1280px]:h-[120vh]" />
            </div>


            <div className=" text-[10vw] md:text-[6.5vw] min-[1280px]:text-[4vw] min-[450px]:text-[8vw] min-[450px]:left-[10%] min-[450px]:right-[10%] 
            gradient-background trans-text flex font-black z-10 absolute 
            md:top-[20%] min-[1280px]:top-[25%] top-[15%] left-10% md:left-[10%] min-[1280px]:left-[15%] min-[1280px]:right-[15%]  md:bottom-[25%] right-10% ">
                <div className="flex flex-col items-center justify-center text-center">
                    <span className="">An ecosystem that empowers </span> <span className="">  ecommerce retailers</span>
                </div>
            </div>

            <div className="max-[1700px]:hidden lg:row-start-4 lg:col-start-5 lg:pl-[85%]  top-[45%] left-[18%] md:top-[45%] md:left-[35%] min-[1280px]:top-[55%] min-[1280px]:left-[41.5%] z-20">
                <button className="button min-[1280px]:h-[4vh]" onClick={() => scrollToSection('Services')}><strong className="text-[10px] ">Services</strong></button>
            </div>

            <div className=" max-[1700px]:hidden   lg:row-start-4 lg:col-start-6 lg:pl-[52.5%] top-[45%] left-[40%]  md:top-[45%] md:left-[46%] min-[1280px]:top-[55%] min-[1280px]:left-[47.5%] z-20">
                <button class="btn z-50" type="button">
                    <strong className="text-[10px] ">Ecosystem</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </button>            </div>

            <div className=" max-[1700px]:hidden lg:row-start-4 lg:col-start-7 lg:pl-[55%] top-[45%] left-[62%]  md:top-[45%] md:left-[57%]  min-[1280px]:top-[55%] min-[1280px]:left-[53.5%] z-10">
                <button className="button min-[1280px]:h-[4vh] " onClick={() => scrollToSection('FAQ')}><strong className="text-[8px] space-x-0 ">Services</strong></button>
            </div>

            <div className="min-[1700px]:hidden max-[1023px]:absolute lg:row-start-4 lg:col-start-5 lg:pl-[85%]  top-[45%] left-[18%] md:top-[45%] md:left-[35%] min-[1280px]:top-[55%] min-[1280px]:left-[41.5%] z-20">
                <button className="button min-[1280px]:h-[4vh]" onClick={() => scrollToSection('Services')}>Services</button>
            </div>

            <div className=" min-[1700px]:hidden max-[1023px]:absolute   lg:row-start-4 lg:col-start-6 lg:pl-[65%] top-[45%] left-[40%]  md:top-[45%] md:left-[46%] min-[1280px]:top-[55%] min-[1280px]:left-[47.5%] z-20">
                <button class="button z-50" type="button">
                    Ecosystem
           
                </button>            </div>

            <div className="min-[1700px]:hidden max-[1023px]:absolute lg:row-start-4 lg:col-start-7 lg:pl-[55%] top-[45%] left-[62%]  md:top-[45%] md:left-[57%]  min-[1280px]:top-[55%] min-[1280px]:left-[53.5%] z-10">
                <button className="button min-[1280px]:h-[4vh] " onClick={() => scrollToSection('FAQ')}>Services</button>
            </div>

















            <div className="absolute top-[53%] min-[1280px]:left-[55%] min-[1280px]:top-[75%]
             w-full md:w-1/2 min-[1280px]:w-1/4  flex flex-col items-center justify-between text-center ">
                <span className="text-[4vw] md:text-[3vw] min-[1280px]:text-[2vw]  trans-text bg-white ">
                    Customer Pick Up Experience</span>
                <span className="flex text-[2vw] md:text-[1.25vw] min-[1280px]:text-sm min-[1280px]:w-1/2 w-3/4">
                    Enhance the shopping journey with a unique, first-of-its-kind checkout.Give your customers an experience they will never forget at pickup.
                </span>
            </div>

            <div className="absolute top-[63%] md:left-[50%] min-[1280px]:left-[70%] min-[1280px]:top-[55%]
             w-full md:w-1/2  flex flex-col items-start justify-between text-center md:text-left min-[1280px]:w-1/4 gap-5 ">
             <div className="flex flex-col">
                <span className="text-[4vw] md:text-[20px] min-[1280px]:text-[1.5vw] trans-text yellow-grad">
                    Powerful Platform </span> <span className="text-[4vw] md:text-[20px] min-[1280px]:text-[1.5vw] trans-text yellow-grad"> & Community</span>
                    </div>
                <span className="flex text-[2vw] md:text-[2vw] min-[1280px]:text-[0.75vw] min-[1280px]:w-1/2 w-3/4 text-white">
                    Thriving on community roots we offer targeted sales channels for university audiences and Gen Zs, ensuring laser-focused engagement.
                </span>
            </div>

            <div className="absolute top-[73%] min-[1280px]:top-[65%] min-[1280px]:left-[10%]
                 w-full md:w-1/2  flex flex-col items-start  text-left min-[1280px]:w-1/4 gap-5">
                 <div className="flex flex-col gap-0">
                <span className="text-[4vw] md:text-[20px] min-[1280px]:text-[1.5vw] trans-text yellow-grad">
                    Fully integrated</span>
                    
                   <span className="text-[4vw] md:text-[20px] min-[1280px]:text-[1.5vw] trans-text yellow-grad"> Shopify Plugin</span>
                   </div>
                <span className="flex text-[2vw] md:text-[2vw] min-[1280px]:text-[0.75vw] min-[1280px]:w-1/2 w-3/4 text-white">
                    Intentionally designed and crafted for shopify retailers. The Budi shopify experience means merchants can manage orders to fulfillment all in one app.
                </span>
            </div>








        </section>
    )









}