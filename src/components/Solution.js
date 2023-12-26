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
    }, []); 

    return (
        <section id="Solution" className=" relative pb-20">




            <div className="flex flex-col  relative bg-inherit pb-40 pt-20 items-center">
   
                <div className="text-[38px] font-black">
                    How we help you
                </div>
                {/* <div className="flex text-xs pl-52 pr-52">
                    Excepteur in magna officia cupidatat mollit excepteur nostrud. Ea qui occaecat culpa fugiat ipsum pariatur enim deserunt. Ea adipisicing eiusmod eiusmod voluptate aliqua reprehenderit reprehenderit culpa adipisicing excepteur qui.Officia minim adipisicing dolore aliqua dolore. Ullamco ut eu Lorem velit ad et ullamco do. Eu tempor incididunt ex officia sint.
                </div> */}
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
  
        </section>
    );
}
