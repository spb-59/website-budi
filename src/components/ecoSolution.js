import { comm, graph, image1, image2, image3, post, student } from "../assests"
import AnimatedImage from "./ImageAn"
import TextBox from "./TextAn"

export default function EcoSolution() {


    return (
        <section className=" relative" id="Solution">
            <div className="flex flex-col  relative bg-inherit pb-10 pt-20 items-center">

                <div className="text-[22px] md:text-[38px] font-black">
                    How we help you
                </div>

            </div>

            <div className="md:min-h-[125vh] relative  flex-auto h-[75vh]">
                <div className="md:sticky  top-[30%] left-[34%] bottom-[30%] pb-[30%] md:w-3/4 lg:w-1/2 w-full z-50">
                    <TextBox
                        text={'Do non ex exercitation enim. Voluptate reprehenderit irure dolore et elit eiusmod ea magna. Nisi nisi aliqua consequat incididunt ut magna reprehenderit do excepteur est irure minim. Aute culpa eiusmod ea consectetur cupidatat deserunt magna consequat Lorem aliquip adipisicing tempor. Duis velit eu est nulla irure qui.'}
                    />
                </div>


                <div className="flex absolute left-[20%] top-[20%] md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">

                    <AnimatedImage src={student} alt={"image1"} />
                </div>
                <div className="flex absolute left-[60%] top-[40%] md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">
                    <AnimatedImage src={comm} alt={"image2"} />
                </div>
                <div className="flex absolute left-[20%] top-[60%]  md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">
                    <AnimatedImage src={image3} alt={'image3'} />
                </div>

            </div>

            <div className="md:min-h-[125vh] relative  flex-auto h-[75vh]">
                <div className="md:sticky  top-[30%] left-[34%] bottom-[30%] pb-[30%] md:w-3/4 lg:w-1/2 w-full z-50">
                    <TextBox
                        text={'Do non ex exercitation enim. Voluptate reprehenderit irure dolore et elit eiusmod ea magna. Nisi nisi aliqua consequat incididunt ut magna reprehenderit do excepteur est irure minim. Aute culpa eiusmod ea consectetur cupidatat deserunt magna consequat Lorem aliquip adipisicing tempor. Duis velit eu est nulla irure qui.'}
                    />
                </div>


                <div className="flex absolute left-[20%] top-[20%] md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">

                    <AnimatedImage src={student} alt={"image1"} />
                </div>
                <div className="flex absolute left-[60%] top-[40%] md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">
                    <AnimatedImage src={comm} alt={"image2"} />
                </div>
                <div className="flex absolute left-[20%] top-[60%]  md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">
                    <AnimatedImage src={post} alt={'image3'} />
                </div>

            </div>

            <div className="md:min-h-[125vh] relative  flex-auto h-[75vh]">
                <div className="md:sticky  top-[30%] left-[34%] bottom-[30%] pb-[30%] md:w-3/4 lg:w-1/2 w-full z-50">
                    <TextBox
                        text={'Do non ex exercitation enim. Voluptate reprehenderit irure dolore et elit eiusmod ea magna. Nisi nisi aliqua consequat incididunt ut magna reprehenderit do excepteur est irure minim. Aute culpa eiusmod ea consectetur cupidatat deserunt magna consequat Lorem aliquip adipisicing tempor. Duis velit eu est nulla irure qui.'}
                    />
                </div>


                <div className="flex absolute left-[20%] top-[20%] md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">

                    <AnimatedImage src={student} alt={"image1"} />
                </div>
                <div className="flex absolute left-[60%] top-[40%] md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">
                    <AnimatedImage src={post} alt={"image2"} />
                </div>
                <div className="flex absolute left-[20%] top-[60%]  md:h-1/4 md:w-[40%] lg:w-1/4 w-1/2">
                    <AnimatedImage src={image3} alt={'image3'} />
                </div>

            </div>


        </section>
    )
}