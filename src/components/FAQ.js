import { Form } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../@/components/ui/accordion"
import { FormInput } from "./FormInput";


export default function FAQ() {
    return (
        <section className="flex flex-col items-center justify-center pb-40  bg-gray-100 " id="FAQ">

            <div className="md:text-4xl font-black mb-8 ">
                Frequently Asked Questions
            </div>


            <div className="flex flex-col w-1/2 items-center justify-center md:flex-auto md:w-[95%] ">
                    <div className="flex flex-col items-center md:w-full pb-10 w-full">
                        <div className="text-lg mb-4">
                            Contact us for further information
                        </div>
                   <FormInput text={"Contact Us"} />
                    </div>
             
                <Accordion type="single" className="xl:w-1/2 w-full md:w-4/5 text-[12px]" collapsible>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent>
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent>
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent>
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent>
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>Cillum amet excepteur est ipsum reprehenderit sit occaecat laboris pariatur esse aliquip?</AccordionTrigger>
                        <AccordionContent>
                            Deserunt ad proident est excepteur tempor consectetur nulla officia est nisi quis. Minim culpa sint commodo enim occaecat et et aute qui labore est dolor eu laborum. Et aliqua irure aliquip laboris velit ipsum Lorem dolore ipsum quis officia quis.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

            </div>
        </section>
    );
}
