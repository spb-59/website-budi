import React, { useEffect, useRef } from 'react';


import { budi } from '../public';
import { FormInput } from './FormInput';

export default function Intro() {
    const footerRef = useRef(null);

    // function changeBgColorSmoothly() {
    //     var appElement = document.querySelector('.App');
    //     appElement.classList.add('purple-bg');
    // }

    // function changeBgColorSmoothlyTrans() {
    //     var appElement = document.querySelector('.App');
    //     appElement.classList.remove('purple-bg');
    // }

    // useEffect(() => {
    //     let timeoutId;
    //     // const footerRefCurrent = footerRef.current; // Create a variable to hold the current value of footerRef


    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 timeoutId = setTimeout(() => {

    //                     changeBgColorSmoothly(); // Add the class when visible
    //                 }, 300);
    //             } else {
    //                 clearTimeout(timeoutId);

    //                 changeBgColorSmoothlyTrans(); // Remove the class when not visible
    //             }
    //         },
    //         {
    //             root: null,
    //             rootMargin: '0px',
    //             threshold: 0.50,
    //         }
    //     );

    //     if (footerRef.current) {
    //         observer.observe(footerRef.current);
    //     }

    //     return () => {
    //         // if (footerRef.current) {
    //         //     observer.unobserve(footerRef.current);
    //         // }
    //     };
    // }, []);
    return (
        <footer className="  "
            ref={footerRef}

        >
            <section className='h-[60vh]' >
                <div className="flex flex-col  relative bg-inherit  pt-20 items-center">

                    <div className="text-[36px] md:text-[48px] lg:text-[52px] font-bold text-center pb-10 max-w-[75%] text-[#562BB9]">
                        Join us today and revolutionise your retail experience.
                    </div>

                    <div className="flex flex-col items-center justify-center  text-center ">
                        {/* <div className="text-lg mb-4 pr-5 text-center items-center flex">
                            Deserunt laboris labore sint consequat.Quis nulla pariatur ullamco ad sunt.
                        </div> */}

                    </div>

                    <FormInput text={"Join Now"} Button={"btnlast"} />





                </div>
            </section>




            <section className=''>

                <div class="mx-auto w-full ">
                    <div class="md:flex md:justify-between flex flex-col md:flex-row">
                        <div class="pt-10 pb-5 relative">

                            <svg
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-100 0 900 900"
                                className="block absolute top-[-10%] sm:left-[-1%] sm:pb-5"
                                fill="currentColor"
                                height={100}
                            >



                                <circle style={{ fill: '#7323ad' }} cx="531.2" cy="237.77" r="21.27" transform="translate(230.31 735.93) rotate(-82.98)" />
                                <path style={{ fill: '#7323ad' }} d="m160.21,289.28c-4.15-5.39-7.59-8.22-13.33-11.59-4.12-2.42-15.45-5.19-26.44-4.36-7.6.58-11.07,1.41-19.14,3.76v-31.68c0-4.29.31-13.52-3.25-21.36-2.97-6.54-10.38-11.16-19.65-12.2-1.15-.13-5.31-.34-6.5-.34h-10.99c-1.19,0-6.34.22-7.5.34-16.49,1.62-21.12,17.14-22.08,28.71-.07.83-.07,4.21,0,5.04,0,0,.52,101.57.52,103.37s1.13,12.34,1.52,15.9c1.29,11.84,14.66,21.69,24.16,22.59,6.47.61,38.11.98,38.11.98,1.05,0,15.81.08,22.68,0,4.7-.06,17.43-1.42,25.47-4.64,7.21-2.89,12.26-6.04,16.03-10.37,4.49-5.16,7.73-11.52,10.18-18.69,2.44-7.17,3.67-14.88,3.67-23.13s-1.22-16.03-3.67-23.18c-2.45-7.14-5.1-13.01-9.81-19.14Zm-45.01,55.62c-8,0-14.49-6.49-14.49-14.49s6.49-14.49,14.49-14.49,14.49,6.49,14.49,14.49-6.49,14.49-14.49,14.49Z" />
                                <path style={{ fill: '#7323ad' }} d="m308.4,274.69c-1.66-.4-3.4-.62-5.18-.62h-27.8c-1.79,0-6.37.07-8.03.47-7.8,1.87-12.31,6.82-12.76,14.8-.18,3.15-.38,4.82-.38,6.9s-.17,18.63-.17,18.63c0,3.88-.2,8.12-1.09,12.01-2.67,11.65-16.28,10.95-18.39-1.2-.6-3.45-.84-6.43-1.13-11.08,0,0-.18-20.86-.68-25.16-.99-8.53-5.11-12.51-13.29-14.74-1.86-.51-5.82-.79-7.85-.79s-6.24-.05-8.38.24c-11.39,1.5-16.86,7.65-18.02,18.19v23.51c0,10.35,1.48,20.1,4.44,29.23,2.96,9.14,7.13,17.13,12.51,23.97,5.38,6.84,11.89,11.24,19.54,15.2,7.64,3.96,23.15,3.94,32.51,3.94,6.49,0,46.21-.22,47.77-.22s3.07-.16,4.54-.47c8.7-1.81,14.53-7.73,16.22-16.48.26-1.37.41-2.77.41-4.22s1.21-68.79,1.21-70.57-.22-3.51-.61-5.17c-1.93-8.08-7.29-14.44-15.36-16.38Z" />
                                <path style={{ fill: '#7323ad' }} d="m568.55,293.36c-1.16-10.15-9.07-18.42-19.17-19.94-1.13-.17-2.29-.27-3.48-.27-1.03,0-27.63-.39-29.42-.39s-3.53.21-5.2.6c-8.87,2.07-15.74,9.31-17.27,18.37-.21,1.24-.33,2.52-.33,3.82s.12,68.34.12,69.36.07,2.03.21,3.02c1.37,10.37,9.71,18.54,20.16,19.65.8.08,27.58.17,34.19,0,.89-.02,1.77-.09,2.65-.26,8.86-1.8,15.15-9,16.47-17.96.16-1.1.3-2.76.4-4.19.06-.9.1-1.65.11-4.22,0,0,.71-64,.71-65,0-.87-.05-1.74-.15-2.58Z" />
                                <path style={{ fill: '#7323ad' }} d="m457.36,211.85c-1.15-.11-6.31-.34-7.5-.34h-10.99c-1.19,0-5.34.21-6.5.34-9.27,1.04-16.68,5.66-19.65,12.2-3.55,7.84-3.25,17.07-3.25,21.36v31.68c-8.07-2.35-11.53-3.19-19.14-3.76-10.99-.83-22.32,1.94-26.44,4.36-5.74,3.37-9.18,6.2-13.33,11.59-4.72,6.13-7.37,12-9.81,19.14-2.44,7.14-3.67,14.87-3.67,23.18s1.22,15.96,3.67,23.13c2.45,7.17,5.69,13.53,10.18,18.69,3.77,4.33,8.82,7.49,16.03,10.37,8.04,3.22,20.78,4.58,25.47,4.64,6.86.08,21.63,0,22.68,0,0,0,31.64-.38,38.11-.98,9.5-.89,22.87-10.74,24.16-22.59.39-3.56,1.52-14.1,1.52-15.9s.52-103.37.52-103.37c.07-.83.07-4.21,0-5.04-.96-11.57-5.59-27.09-22.08-28.71Zm-61.77,133.05c-8,0-14.49-6.49-14.49-14.49s6.49-14.49,14.49-14.49,14.49,6.49,14.49,14.49-6.49,14.49-14.49,14.49Z" />
                            </svg>

                        </div>



                        <div class="grid  grid-cols-3 gap-2 sm:gap-6 sm:grid-cols-3">
                            <div >
                                <h2 class="mb-6 md:text-sm text-[10px] font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium ">
                                    <li class="mb-4">
                                        <a href='#' class="hover:underline md:text-sm text-[10px] ">Budi</a>
                                    </li>
                                    <li className=' hover:cursor-pointer hover:underline md:text-sm text-[10px]'>
                                        <FormInput text={'Contact us'} Button={'block'} />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline md:text-sm text-[10px]">Mission</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline md:text-sm text-[10px]">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline md:text-sm text-[10px]">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline md:text-sm text-[10px]">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>




                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-center gap-60">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Budi™</a>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                                <span class="sr-only">Discord community</span>
                            </a>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Twitter page</span>
                            </a>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">GitHub account</span>
                            </a>

                        </div>
                    </div>
                </div>
            </section>


        </footer>



    );
}
