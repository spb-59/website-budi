
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
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
                        <AccordionTrigger className="xl:text-lg">
How is a Budi Session created?                        </AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
Budi Sessions are created when a shopper selects a Budi delivery address at checkout. The session will be created with the settings configured in preferences for duration and discount.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="xl:text-lg">
How is a Budi Session closed?                        </AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
A Budi Session will close when the time the Session has been opened for reaches the Session Duration set in Preferences. The session will automatically close and will be ready to fulfil.                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="xl:text-lg">How do I fulfil a Budi Session?</AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
Once all Budi Orders have been picked/packed, package dimensions must be specified for every order in the Budi Session. Once all orders have been assigned a package, a fulfilment can be requested and confirmed within a selected Session from the Sessions Dashboard. This will require you to select a pick-up time and confirm your pickup location.                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="xl:text-lg">How do I add 'packaging on hand'?</AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
Packaging on hand is required to request a fulfilment quote. Packaging options can be added in Preferences. Packaging should generally be overestimated to avoid fees charged by incorrect dimensions declared upon fulfilment. For satchels, its important to have multiple varients of heights to ensure that accurate packaging dimensions are assigned to an order.                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="xl:text-lg">How do I pick/pack a Budi Order?</AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
Budi orders are assigned to a Session, when a Session closes a fulfilment can be requested and booked within the Budi App. Orders should be picked/packed seperately with customer labels added to each parcel.                        </AccordionContent>
                    </AccordionItem>

                                        <AccordionItem value="item-6">
                        <AccordionTrigger className="xl:text-lg">
Can I pick/pack Budi Orders before a Session closes?                       </AccordionTrigger>
                        <AccordionContent className="xl:text-[15px]">
Yes, Budi Orders can be picked/packed at any time. However, pick/packing orders before a Session can cause difficulty ensuring parcels are together for aggregated fulfilment. You may find it easier to handle aggregated fulfilments if all Budi Orders in a Session are picked/packed together.                        </AccordionContent>
                    </AccordionItem>


                </Accordion>

            </div>
        </section>
    );
}
// const faqs = {
//     left: [
//       {
//         title: "How is a Budi Session created?",
//         description:
//           "Budi Sessions are created when a shopper selects a Budi delivery address at checkout. The session will be created with the settings configured in preferences for duration and discount.",
//       },
//       {
//         title: "How is a Budi Session closed?",
//         description:
//           "A Budi Session will close when the time the Session has been opened for reaches the Session Duration set in Preferences. The session will automatically close and will be ready to fulfil.",
//       },
//       {
//         title: "How do I fulfil a Budi Session?",
//         description:
//           "Once all Budi Orders have been picked/packed, package dimensions must be specified for every order in the Budi Session. Once all orders have been assigned a package, a fulfilment can be requested and confirmed within a selected Session from the Sessions Dashboard. This will require you to select a pick-up time and confirm your pickup location.",
//       },
//     ],
//     right: [
//       {
//         title: "How do I add 'packaging on hand'?",
//         description:
//           "Packaging on hand is required to request a fulfilment quote. Packaging options can be added in Preferences. Packaging should generally be overestimated to avoid fees charged by incorrect dimensions declared upon fulfilment. For satchels, its important to have multiple varients of heights to ensure that accurate packaging dimensions are assigned to an order.",
//       },
//       {
//         title: "How do I pick/pack a Budi Order?",
//         description:
//           "Budi orders are assigned to a Session, when a Session closes a fulfilment can be requested and booked within the Budi App. Orders should be picked/packed seperately with customer labels added to each parcel.",
//       },
//       {
//         title: "Can I pick/pack Budi Orders before a Session closes?",
//         description:
//           "Yes, Budi Orders can be picked/packed at any time. However, pick/packing orders before a Session can cause difficulty ensuring parcels are together for aggregated fulfilment. You may find it easier to handle aggregated fulfilments if all Budi Orders in a Session are picked/packed together.",
//       },
//     ],

