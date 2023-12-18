import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import "../App.css"

export default function Intro() {
    const introRef = useRef(null);
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

        if (introRef.current) {
            observer.observe(introRef.current);
        }

        return () => {
            if (introRef.current) {
                observer.unobserve(introRef.current);
            }
        };
    }, []);

    return (
    <>
        <section
            
            className='section bg-transparent'
            ref={introRef}
        >
            <div className="grid grid-rows-4 w-max-100% max-h-full ">
                <div className="grid grid-cols-12 row-start-2  row-span-1">
                    <div className="flex-auto bg-white bg-opacity-10 col-start-3 col-span-3 ">
                        <div className="pt-2 pr-2 pl-12 pb-0 font-bold intro-text">
                            Reduce Cart Abandonment to <span className="font-black">Zero</span>
                        </div>
                    </div>
                    <div className="flex-auto  bg-white bg-opacity-10 col-start-6 col-span-3 pt-20 pl-10 ">
                        <div className="pt-2 pr-2 pl-0 pb-0 font-bold text-3xl">
                            Revolutionize your retail experience
                        </div>
                        <div className="font-thin pb-20">
                            Join budi today and take your retail experience to the next level.
                        </div>
                        <button className="button-1 pt-30">Learn more</button>

                    </div>
                </div>
            </div>
            
        </section>
        <Outlet />
        </>
    );
}
