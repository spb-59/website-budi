
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../@/components/ui/accordion"
import { FormInput } from "./FormInput";
import  dog  from "../public/dog.jpeg";
import Image from "next/image";


export default function FAQ() {
    return (
        <section className="flex flex-col items-center justify-center pb-40 md:gap-y-24 gap-y-10  bg-[#fffef3]" id="FAQ's">

            <div className=" text-[24px] sm:text-[32px] md:text-[48px]  font-bold mb-8 pt-24">
                Frequently Asked Questions
            </div>


            <div className="flex flex-col md:flex-row w-[85%] items-center justify-center md:flex-auto xl:w-3/5 md:w-[75%] xl:gap-36 md:gap-10">
                <div className="flex flex-col items-start xl:w-1/4 md:w-1/3 pb-10 w-full gap-0">
                    <div className="h-1/4 flex items-center pb-2" ><Image className=" rounded-[50%] max-h-16 w-10 md:max-h-18 md:w-16" src={dog} /></div>
                    <div className="mb-4 text-left text-gray-700 text-[14px]">
                        Koda is here to help 🥳 <br /><br /> Speak to a Budi team member today
                    </div>
                    <span className=' hover:cursor-pointer hover:underline text-[#562BB9]'>
                        <FormInput text={'Contact us'} Button={'block'} />
                    </span>
                </div>

                <Accordion type="single" className=" w-full xl:w-3/4 md:w-2/3 text-[12px] md:text-[16px] text-left" collapsible>

                    <AccordionItem value="item-1">
                        <AccordionTrigger className="xl:text-lg">Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="xl:text-lg">Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="xl:text-lg">Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="xl:text-lg">Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="xl:text-lg">Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

            </div>
        </section>
    );
}
