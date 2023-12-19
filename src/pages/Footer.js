import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import "../App.css"
import { budi } from '../assests';

export default function Intro() {
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    function changeBgColorSmoothly() {
        var appElement = document.querySelector('.App');
        appElement.classList.add('transparent-bg');
    }

    function changeBgColorSmoothlyTrans() {
        var appElement = document.querySelector('.App');
        appElement.classList.remove('transparent-bg');
    }

    useEffect(() => {
        let timeoutId;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timeoutId = setTimeout(() => {
                        setIsVisible(true);
                        changeBgColorSmoothly(); // Add the class when visible
                    }, 100);
                } else {
                    clearTimeout(timeoutId);
                    setIsVisible(false);
                    changeBgColorSmoothlyTrans(); // Remove the class when not visible
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.85,
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <>
            <section

                className='section bg-transparent'
                ref={footerRef}
            >
                <div className="grid grid-rows-6 grid-cols-12 pt-20">

                    <span className='col-start-3 col-span-9 outro-text'>Join Budi Today and</span>
                    <span className='col-start-3 col-span-9 outro-text'>Revolutionise your Retail Experience</span>

                    <div className='row-start-5

                 row-span-full  col-span-full grid grid-cols-12 grid-rows-4 bg-gray-100 bg-opacity-5 '>

                        <img className='row-start-2 col-start-1 row-span-1 col-span-2' src={budi} />
                        <span className='row-start-2 col-start-3 col-span-full text-4xl'>
                           Legal
                        </span>


                        <div className='row-start-3 col-start-3 pl-10 col-span-full flex flex-col text-2xl'>
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                        </div>


                        <span className='row-start-2 col-start-6 col-span-full text-4xl'>
                            Socials
                        </span>


                        <div className='row-start-3 col-start-6 pl-10 col-span-full flex flex-col text-2xl'>
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                        </div>


                        <span className='row-start-2 col-start-9 col-span-full text-4xl'>
                            Contact
                        </span>


                        <div className='row-start-3 col-start-9 pl-10 col-span-full flex flex-col last:text-2xl'>
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                            <span>Contact</span>
                        </div>




                    </div>



                </div>

            </section>
            <Outlet />
        </>
    );
}
