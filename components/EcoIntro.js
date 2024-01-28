import  web  from "../public/backing.webp";
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";

// import { Link } from "react-router-dom";


export default function InrtoEco() {
const [cond,setCond]=useState(false);
const [safari,setSafari]=useState(false)

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


useEffect(() => {
let userData=navigator.userAgent;
let chromeAgent = userData.indexOf("Chrome") > -1; 

// Detect Safari 
let safariAgent = userData.indexOf("Safari") > -1; 
  
// Discard Safari since it also matches Chrome 
if ((chromeAgent) && (safariAgent)) safariAgent = false; 

setSafari(safariAgent);
setCond(userData.toLowerCase().includes('firefox'));
},[])


    return (
        <section className="relative  justify-center  w-full items-center  grid-rows-6 grid-cols-12 sm:pb-5 h-[100vh] xl:h-[150vh] xl:pb-10 max-w-[100vw]  " ref={introRef} >


<div className={(!cond && !safari) ? "absolute md:top-[-15%] top-[-20%] min-[1281px]:top-[7.5%] overflow-visible z-0 flex-auto items-center" : "h-[170vh] absolute md:top-[-15%] top-[-20%] min-[1281px]:top-[-20%] overflow-visible z-0 flex-auto items-center "}>   
             <Image src={web} alt="web" className="im-size firefox lg:min-h-full " priority={true}/>
            </div>

            <div className="flex w-full items-center flex-col absolute md:top-[25%] xl:top-[25%] top-[15%] md:gap-10 xl:gap-10  ">
                
                <div className=" text-[8.5vw] md:text-[5vw] xl:text-[4vw] min-[450px]:text-[8vw] min-[450px]:left-[10%] min-[450px]:right-[10%] 
            gradient-background trans-text flex font-black z-10 
            md:top-[20%] xl:top-[25%] top-[15%] left-10% md:left-[10%] xl:left-[15%] xl:right-[15%]  md:bottom-[25%] right-10% ">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="">An ecosystem that empowers </span> <span className="">  ecommerce retailers</span>
                    </div>
                </div>

                {/* <div className="max-[1700px]:hidden xl:row-start-4 xl:col-start-5 xl:pl-[85%]  top-[45%] left-[18%] md:top-[45%] md:left-[35%] xl:top-[55%] xl:left-[41.5%] z-20">
                    <button className="button xl:h-[4vh]" onClick={() => scrollToSection('Services')}><strong className="text-[10px] ">Services</strong></button>
                </div> */}

                {/* <div className=" max-[1700px]:hidden   xl:row-start-4 xl:col-start-6 xl:pl-[52.5%] top-[45%] left-[40%]  md:top-[45%] md:left-[46%] xl:top-[55%] xl:left-[47.5%] z-20">
                    <button class="btn z-50" type="button">
                        <strong className="text-[10px] ">Ecosystem</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>

                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </button>
                </div>

                <div className=" max-[1700px]:hidden xl:row-start-4 xl:col-start-7 xl:pl-[55%] top-[45%] left-[62%]  md:top-[45%] md:left-[57%]  xl:top-[55%] xl:left-[53.5%] z-10">
                    <button className="button xl:h-[4vh] " onClick={() => scrollToSection('FAQ')}><strong className="text-[8px] space-x-0 ">Services</strong></button>
                </div>

                <div className="min-[1700px]:hidden max-[1023px]:absolute xl:row-start-4 xl:col-start-5 xl:pl-[85%]  top-[45%] left-[18%] md:top-[45%] md:left-[35%] xl:top-[55%] xl:left-[41.5%] z-20">
                    <button className="button xl:h-[4vh]" onClick={() => scrollToSection('Services')}>Services</button>
                </div>

                <div className=" min-[1700px]:hidden max-[1023px]:absolute   xl:row-start-4 xl:col-start-6 xl:pl-[65%] top-[45%] left-[40%]  md:top-[45%] md:left-[46%] xl:top-[55%] xl:left-[47.5%] z-20">
                    <button class="button z-50" type="button">
                        Ecosystem

                    </button>
                </div>


                <div className="min-[1700px]:hidden max-[1023px]:absolute xl:row-start-4 xl:col-start-7 xl:pl-[55%] top-[45%] left-[62%]  md:top-[45%] md:left-[57%]  xl:top-[55%] xl:left-[53.5%] z-10">
                    <button className="button xl:h-[4vh] " onClick={() => scrollToSection('Pages')}>Services</button>
                </div>

 */}


          <div className="flex xl:gap-20 gap-5">
          
                 <div className=" z-20">
                    <button class="btn z-50" type="button" >
                        <strong className="text-[12px] ">Ecosystem</strong>
                        {!safari &&(
                        <><div id="container-stars">

                                    <div id="stars"></div>
                                </div><div id="glow">
                                        <div class="circle"></div>
                                        <div class="circle"></div>
                                    </div></>)}
                    </button>
                </div>
                       <div className=" z-20">
                    <button class="btn z-50" type="button" onClick={() => scrollToSection('Services')}>
                        <strong className="text-[12px] ">Services</strong>
                        
                    </button>
                </div>
                       <div className=" z-20">
                    <button class="btn z-50" type="button" onClick={() => scrollToSection('Solution')}>
                        <strong className="text-[12px] ">Solution</strong>
                     
                    </button>
                </div>
          
          
          
          </div>





            </div>















            <div className="absolute top-[53%] md:left-[10%] xl:left-[45%] xl:top-[75%]
            w-full md:w-1/4  flex flex-col md:items-start md:justify-between items-center text-center md:text-left xl:w-1/4 md:gap-5 overflow-hidden">

                <span className="text-[16px] md:text-[22px] xl:text-[30px] trans-text yellow-grad">
                    Customer Pick Up <br className="hidden md:inline" /> Experience</span>
                <span className="flex text-[10px] md:text-[12px] xl:text-[14px] md:w-3/5 xl:w-3/5  w-3/4 text-white">
                    Enhance the shopping journey with a unique, first-of-its-kind checkout.Give your customers an experience they will never forget at pickup.
                </span>
            </div>

            <div className="absolute top-[63%] md:left-[70%] xl:left-[70%] xl:top-[55%] md:top-[58%]  
             w-full md:w-1/4  flex flex-col md:items-start md:justify-between items-center text-center md:text-left xl:w-1/4 md:gap-5 overflow-hidden ">
                <div className="md:flex flex-col">
                    <span className="text-[16px] md:text-[22px] xl:text-[30px] trans-text yellow-grad">
                        Powerful Platform </span> <span className="text-[16px] md:text-[22px] xl:text-[30px] trans-text yellow-grad"> & Community</span>
                </div>
                <span className="flex text-[10px] md:text-[12px] xl:text-[14px] md:w-3/5 xl:w-3/5  w-3/4 text-white">
                    Thriving on community roots we offer targeted sales channels for university audiences and Gen Zs, ensuring laser-focused engagement.
                </span>
            </div>

            <div className="absolute top-[73%] xl:top-[64%] xl:left-[18%] md:top-[70%] md:left-[35%]
              w-full md:w-1/4  flex flex-col md:items-start md:justify-between items-center text-center md:text-left xl:w-1/4 md:gap-5 overflow-hidden">
                <div className="md:flex flex-col gap-0">
                    <span className="text-[16px] md:text-[22px] xl:text-[30px] trans-text yellow-grad">
                        Fully integrated</span>

                    <span className="text-[16px] md:text-[22px] xl:text-[30px] trans-text yellow-grad"> Shopify Plugin</span>
                </div>
                <span className="flex text-[10px] md:text-[12px] xl:text-[14px] md:w-3/5 xl:w-3/5 w-3/4 text-white">
                    Intentionally designed and crafted for shopify retailers. The Budi shopify experience means merchants can manage orders to fulfillment all in one app.
                </span>
            </div>








        </section>
    )









}