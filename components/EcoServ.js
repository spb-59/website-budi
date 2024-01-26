
import s21 from "../public/s21.png"
import s22 from "../public/s22.png"
import s23 from "../public/s23.png"
import s24 from "../public/s24.png"
import Image from "next/image"

export default function EcoServ() {





    return (
        <><section id="Services" className="sm:pt-5 relative pb-0 lg:pt-10  bg-opacity-[80%]">

            <div className=" flex md:min-h-[60vh] flex-col ">
                <div className="md:row-start-1  md:col-start-3  text-[15px] sm:text-[24px] xl:text-[48px]  font-bold md:col-span-6 col-span-full row-span-full flex flex-col items-center gap-0 pt-0  pb-10 ">
                    <span className="">Transforming the <span className=" text-gray-500">Traditional Retail approach</span></span>

                    <div className=" ">To the  <span className=" text-yellow-600"> Modern Retailer Outcome </span></div>
                </div>
                <div className="flex md:w-full md:col-start-1 md:row-start-2 md:col-span-full md:row-span-full md:pt-10 ">


                    {innerElem()}


                </div>





            </div>
        </section>



        </>








    );


}

function innerElem() {

    return (

        <>
            <div className=" md:grid-rows-4 md:grid-cols-7  md:gap-0 md:hidden text-center gap-5" >

                <div className="md:col-start-2 md:row-start-1    flex flex-col md:col-span-1 md:row-span-2  items-center pb-10">

                    <div className="flex md:text-[20px] text-[14px] font-bold  items-center text-color justify-center text-center md:items-start w-4/5 relative ">
                        <div className="absolute max-w-[15%] max-h-[15%] left-[-20px] top-[-25px]
                             overflow-visible"><Image src={s21} />
                        </div>
                        Eliminate Cart Abandonment to Zero</div>
                    <div className="flex text-[8px]  w-1/2 md:w-3/5   items-center">
                        Gone are the days your customers leave because of pesky shipping fees.Our Logistics channels means every order fulfilled via our platform is eligible for customer free delivery.</div></div>
                <div className="md:col-start-4 md:row-start-1    flex flex-col md:col-span-1 md:row-span-2 items-center pb-10">
                    <div className="flex md:text-[20px] text-[14px] font-bold items-center text-color justify-center text-center md:items-start w-4/5 relative">
                        Complete Carbon Neutral logistics scheme.
                        <div className="absolute max-w-[15%] max-h-[15%] right-[-20px] top-[-25px]
                             overflow-visible"><Image src={s22} />
                        </div>
                    </div>
                    <div className="flex text-[8px] w-1/2 md:w-3/5   items-center">
                        Rest easy knowing our logistics form warehouse to customer is 100% carbon neutral and even better, carbon positive. With every order via Budi let your customers know its the best way to shop for the planet.
                    </div></div>

                <div className="md:col-start-3 md:row-start-3   flex flex-col cmd:ol-span-1 md:row-span-2 items-center pb-10 ">
                    <div className="flex md:text-[20px] text-[14px] font-bold items-center text-color justify-center text-center md:items-start w-4/5 relative ">
                        Supercharge sales through the Budi Platform
                        <div className="absolute max-w-[15%] max-h-[15%] left-[-20px] top-[-25px]
                             overflow-visible"><Image src={s23} />
                        </div>
                    </div>
                    <div className="flex text-[8px]  w-1/2 md:w-3/5   items-center">
                        As delivery fees hit 0, Your customers and all those soon to be are eagerly awating on our Budi platform. Let your products speak for itself without the shopping barrier
                    </div></div>
                <div className="md:col-start-5 md:row-start-3   flex flex-col cmd:ol-span-1 md:row-span-2 items-center pb-10">
                    <div className="flex md:text-[20px] text-[14px] font-bold items-center text-color justify-center text-center md:items-start w-4/5 relative">
                        Reduce operational cost upto 80%
                        <div className="absolute max-w-[15%] max-h-[15%] right-[-20px] top-[-25px]
                             overflow-visible"><Image src={s24} />
                        </div>
                    </div>
                    <div className="flex text-[8px]  w-1/2 md:w-3/5   items-center">
                        The Budi magic also enables retailers to fulfil orders all whilst saving on merchant logistic costs. By aggregating orders on the app our software ensures your rates are unbeatable.
                    </div></div>

            </div>



            <div className="hidden items-center justify-center md:flex w-full ">
                <div className="flex flex-col  w-3/4 items-center md:text-balance gap-5 md:h-[60vh] xl:h-[40vh]" >

                    <div className="flex flex-row min-h-[50%] h-[50%]">

                        <div className="min-w-[50%] flex flex-col py-px items-center w-[50%] md:gap-5 lg:gap-2">

                            <div className="flex md:text-[20px] text-[14px] font-black items-start text-color text-left md:items-start h-2/5 w-3/5 relative  ">
                                <div className="absolute xl:top-[-135%] md:top-[-50%] 
                                xl:left-[-15%] xl:max-w-[25%] md:max-w-[30%] xl:max-h-[25%] md:max-h-[35%]
                                     lg:top-[-50%] lg:left-[-25%]  lg:max-w-[30%] lg:max-h-[30%] overflow-visible"><Image src={s21} /></div>
                                Eliminate Cart Abandonment to Zero
                            </div>
                            <div className="flex md:text-[12px] text-[14px]  w-3/5 md:w-3/5   items-start font-bold    h-full">
                                Gone are the days your customers leave because of pesky shipping fees.Our Logistics channels means every order fulfilled via our platform is eligible for customer free delivery.
                            </div>



                        </div>

                        <div className="w-[50%] min-w-[50%] flex flex-col py-px items-center md:gap-5 lg:gap-2 ">

                            <div className="flex md:text-[20px] text-[14px] font-black items-start text-color text-left md:items-start h-2/5 w-3/5 relative ">
                                <div className="absolute xl:top-[-140%] xl:right-[5%] xl:max-w-[25%] xl:max-h-[25%] 
                                 md:top-[-50%] md:right-[10%]  md:max-w-[30%] md:max-h-[35%]
                                     lg:top-[-60%] lg:right-[5%]  lg:max-w-[30%] lg:max-h-[30%] overflow-visible"><Image src={s22} /></div>

                                Reduce operational cost by upto 80%
                            </div>
                            <div className="flex md:text-[12px] text-[14px]  w-3/5 md:w-3/5   items-start  font-bold  h-full">
                                The Budi magic also enables retailers to fulfil orders all whilst saving on merchant logistic costs. By aggregating orders on the app our software ensures your rates are unbeatable.
                            </div>




                        </div>
                    </div>

                    <div className="flex flex-row min-h-[50%] h-[50%]">


                        <div className="min-w-[50%] flex flex-col py-px items-center w-[50%] md:gap-5 lg:gap-2 ">

                            <div className="flex md:text-[20px] text-[14px] font-black  items-start text-color text-left md:items-start h-2/5 w-3/5 relative ">
                                <div className="absolute xl:top-[-90%] xl:left-[-15%] xl:max-w-[25%] xl:max-h-[25%] overflow-visible 
                                md:top-[-20%] md:left-[-30%]  md:max-w-[40%] md:max-h-[40%]
                                    lg:top-[-50%] lg:left-[-30%]  lg:max-w-[30%] lg:max-h-[30%]"><Image src={s23} /></div>

                                Supercharge sales through the Budi Platform
                            </div>
                            <div className="flex md:text-[12px] text-[14px]  w-3/5 md:w-3/5   items-start  font-bold   h-full">
                                As delivery fees hit 0, Your customers and all those soon to be are eagerly awating on our Budi platform. Let your products speak for itself without the shopping barrier
                            </div>



                        </div>

                        <div className="min-w-[50%] w-[50%] flex flex-col py-px items-center  md:gap-5 lg:gap-2">

                            <div className="flex md:text-[20px] text-[14px] font-black  items-start text-color text-left md:items-start h-2/5 w-3/5 relative ">
                                <div className="absolute xl:top-[-90%] xl:right-[0%] xl:max-w-[25%] xl:max-h-[25%] overflow-visible
                                 md:top-[-30%] md:right-[5%]  md:max-w-[35%] md:max-h-[35%]
                                  lg:top-[-50%] lg:right-[5%]  lg:max-w-[30%] lg:max-h-[30%]"><Image src={s24} /></div>
                                Complete Carbon Neutral logistics scheme.
                            </div>
                            <div className="flex md:text-[12px] text-[14px]  w-3/5 md:w-3/5   items-start font-bold    h-full">
                                Rest easy knowing our logistics form warehouse to customer is 100% carbon neutral and even better, carbon positive. With every order via Budi let your customers know its the best way to shop for the planet.
                            </div>



                        </div>

                    </div>


                </div>
            </div >






        </>


    );


}