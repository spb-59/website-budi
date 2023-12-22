import AnimatedImage from "./ImageAn";
import { budi, image1, image2, image3 } from "../assests";
import TextBox from "./TextAn";
import React, { useRef, useEffect, useState } from 'react';

export default function Solution() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const [image, setImage] = useState(budi);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Access entry.target to get the observed DOM element
                const observedElement = entry.target;

                // Check if the observed element is currently visible
                if (entry.isIntersecting) {
                    // Update the image based on the observed element
                    if (observedElement === ref1.current) {
                        setImage(image1);
                    } else if (observedElement === ref2.current) {
                        setImage(image2);
                    } else if (observedElement === ref3.current) {
                        setImage(image3)

                    }

                    console.log('Element is in the viewport');
                } else {
                    console.log('Element is out of the viewport');
                }
            });
        });

        // Observe the elements
        if (ref1.current) {
            observer.observe(ref1.current);
        }

        if (ref2.current) {
            observer.observe(ref2.current);
        }

        if (ref3.current) {
            observer.observe(ref3.current);
        }

        // Cleanup the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <section id="Solution" className=" relative pb-20">

            <div class="custom-shape-divider-top-1702491686">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>




            <div className="grid grid-rows-3 grid-cols-12 relative bg-inherit pb-40">
                <div className="row-start-1 col-start-1 pt-10 pl-10">Our solution</div>
                <div className="row-start-2 head-text col-start-3 col-span-3">
                    How we help you
                </div>
                <div className="flex row-start-3 col-start-3 col-span-3 bg-black bg-opacity-5 row-span-1 pt-10">
                    Excepteur in magna officia cupidatat mollit excepteur nostrud. Ea qui occaecat culpa fugiat ipsum pariatur enim deserunt. Ea adipisicing eiusmod eiusmod voluptate aliqua reprehenderit reprehenderit culpa adipisicing excepteur qui.Officia minim adipisicing dolore aliqua dolore. Ullamco ut eu Lorem velit ad et ullamco do. Eu tempor incididunt ex officia sint.
                </div>
            </div>

            <div className="grid grid-cols-12">
                <div className="flex flex-row  col-start-3 col-span-8">
                    <div className="flex flex-col w-1/3">

                        <div className='flex pt-10 pb-max' ref={ref1}>
                            <TextBox text={'Ullamco occaecat id do sunt Lorem magna. Labore fugiat ut velit sint exercitation excepteur pariatur. Dolore cillum elit qui duis velit et cillum.'} />
                        </div>
                        <div className='flex pt-max pb-max' ref={ref2}>
                            <TextBox text={'Sint et quis eu occaecat. Duis aliqua tempor est deserunt qui. Eiusmod quis ipsum amet velit incididunt velit nostrud aute officia est ea. Irure officia proident laboris excepteur. Mollit consectetur Lorem mollit enim est exercitation esse amet aliquip consequat exercitation pariatur. Ad consectetur voluptate labore sint laborum velit veniam exercitation Lorem tempor proident anim. Sit velit eiusmod magna et officia nisi deserunt magna tempor culpa minim eu.'} />
                        </div>
                        <div className='flex pt-max  pb-20' ref={ref3}>
                            <TextBox text={'Sit excepteur nulla sint veniam velit cillum et nulla ex. Enim sunt occaecat pariatur aliqua exercitation laborum eiusmod. Pariatur tempor sit consectetur ipsum minim veniam incididunt nulla fugiat voluptate sit veniam ut adipisicing.'} />
                        </div>



                    </div>
                    <div className="flex left-full top-20 pb-20 h-1/4 w-3/5 sticky">
                        <AnimatedImage
                            src={
                                image
                            }
                            alt={'budi'}
                        />
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1702492604">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
}
