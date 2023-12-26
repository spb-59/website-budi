import { web } from "../assests";
import React, { useEffect, useRef } from 'react';



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
                threshold: 0.85,
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

    return (
        <section className="relative pb-20 md:h-[100vh] " ref={introRef} >


                <div className="md:flex lg:flex hidden absolute top-10 z-0 flex-auto justify-center items-center h-3/4  ">
                    <img src={web} alt="web" className="w-3/4" />
                </div>

            <div className="grid md:grid-cols-12 grid-cols-12 md:grid-rows-6 grid-rows-4  w-full h-full  relative">

                <div className="md:col-start-4 col-start-12 col-span-7 text-head row-start-3 row-span-2 gradient-background trans-text flex font-black z-10 ">
                    <div className="pl-24">
                        <span className="">Creating a ecosystem for</span> <br /><span className="pl-10">  your retail experience.</span>
                    </div>
                </div>

                <div className="col-start-6 row-start-4 pt-16 ">
                    <button className="button">Discover</button>
                </div>

                <div className="col-start-6 pt-32 row-start-4 pl-28  ">
                    <button className="button">Discover</button>
                </div>


                <div className="col-start-7 pl-16 row-start-4 pt-16 ">
                    <button className="button">Discover</button>
                </div>

                <div className="col-start-2  col-span-2 row-start-5 text-white  flex flex-col ">
                    <span className="text-title font-bold trans-text yellow-grad">Customer Pick Up Experience</span>  <span className="text-content">Pariatur consequat irure id anim reprehenderit et elit magna duis dolor anim. Irure excepteur sit veniam incididunt laboris aliqua non mollit.</span>
                </div>


                <div className="col-start-10 col-span-2 row-start-3 text-white  flex flex-col ">
                    <span className="text-title font-bold trans-text yellow-grad">Powerful Platform
                        & Community</span>  <span className="text-content">Pariatur consequat irure id anim reprehenderit et elit magna duis dolor anim. Irure excepteur sit veniam incididunt laboris aliqua non mollit.</span>
                </div>


                <div className="col-start-9 col-span-2 row-start-5 text-white  flex flex-col ">
                    <span className="text-title trans-text yellow-grad font-bold">Fully integrated
                        Custom
                        Shopify Plugin</span>  <span className="text-content ">Pariatur consequat irure id anim reprehenderit et elit magna duis dolor anim. Irure excepteur sit veniam incididunt laboris aliqua non mollit.</span>
                </div>





            </div>
        </section>
    )









}