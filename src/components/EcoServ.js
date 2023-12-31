
export default function EcoServ() {



    return (
        <><section id="Services" className="sm:pt-5 relative pb-0 lg:pt-10  bg-opacity-[80%]">

            <div className=" flex md:min-h-[60vh] flex-col ">
                <div className="md:row-start-1  md:col-start-3  text-[16px] sm:text-[32px] xl:text-[48px]  font-bold md:col-span-6 col-span-full row-span-full flex flex-col items-center gap-0 pt-0  pb-10 ">
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
            <div className=" md:grid-rows-4 md:grid-cols-7 gap-4 md:gap-0 md:hidden" >

                <div className="md:col-start-2 md:row-start-1    flex flex-col md:col-span-1 md:row-span-2  items-center pb-10">
                    <div className="flex md:text-[24px] text-[16px] font-bold  items-center text-color justify-center text-center md:items-start  ">
                        Eliminate Cart Abandonment to Zero</div>
                    <div className="flex text-[8px]  w-1/2 md:w-3/5   items-center">
                        Gone are the days your customers leave because of pesky shipping fees.Our Logistics channels means every order fulfilled via our platform is eligible for customer free delivery.</div></div>
                <div className="md:col-start-4 md:row-start-1    flex flex-col md:col-span-1 md:row-span-2 items-center pb-10">
                    <div className="flex md:text-[24px] text-[16px] font-bold items-center text-color justify-center text-center md:items-start ">
                        Complete Carbon Neutral logistics scheme.</div>
                    <div className="flex text-[8px] w-1/2 md:w-3/5   items-center">
                        Rest easy knowing our logistics form warehouse to customer is 100% carbon neutral and even better, carbon positive. With every order via Budi let your customers know its the best way to shop for the planet.
                    </div></div>

                <div className="md:col-start-3 md:row-start-3   flex flex-col cmd:ol-span-1 md:row-span-2 items-center pb-10 ">
                    <div className="flex md:text-[24px] text-[16px] font-bold items-center text-color justify-center text-center md:items-start ">
                        Supercharge sales through the Budi Platform</div>
                    <div className="flex text-[8px]  w-1/2 md:w-3/5   items-center">
                        As delivery fees hit 0, Your customers and all those soon to be are eagerly awating on our Budi platform. Let your products speak for itself without the shopping barrier
                    </div></div>
                <div className="md:col-start-5 md:row-start-3   flex flex-col cmd:ol-span-1 md:row-span-2 items-center pb-10">
                    <div className="flex md:text-[24px] text-[16px] font-bold items-center text-color justify-center text-center md:items-start ">
                        Reduce operational cost upto 80% </div>
                    <div className="flex text-[8px]  w-1/2 md:w-3/5   items-center">
                        The Budi magic also enables retailers to fulfil orders all whilst saving on merchant logistic costs. By aggregating orders on the app our software ensures your rates are unbeatable.
                    </div></div>

            </div>


            <div className="hidden items-center justify-center md:flex w-full ">
                <div className="flex flex-row flex-wrap w-3/4 items-center h-full md:text-balance">
                
                    <div className="w-1/2 flex flex-col py-px items-center lg:h-[35vh] md:h-[45vh]">

                        <div className="flex md:text-[24px] text-[16px] font-bold  items-start text-color text-left md:items-start h-2/5 w-3/5  ">

                            Eliminate Cart Abandonment to Zero
                        </div>
                        <div className="flex md:text-[16px] text-[16px]  w-3/5 md:w-3/5   items-start    h-full">
                            Gone are the days your customers leave because of pesky shipping fees.Our Logistics channels means every order fulfilled via our platform is eligible for customer free delivery.
                        </div>



                    </div>
                            <div className="w-1/2 flex flex-col py-px items-center lg:h-[35vh] md:h-[45vh]">

                        <div className="flex md:text-[24px] text-[16px] font-bold  items-start text-color text-left md:items-start h-2/5 w-3/5  ">

                            Reduce operational cost by upto 80%
                        </div>
                        <div className="flex md:text-[16px] text-[16px]  w-3/5 md:w-3/5   items-start    h-full">
                            The Budi magic also enables retailers to fulfil orders all whilst saving on merchant logistic costs. By aggregating orders on the app our software ensures your rates are unbeatable.
                        </div>



                    </div>
                            <div className="w-1/2 flex flex-col py-px items-center lg:h-[35vh] md:h-[45vh]">

                        <div className="flex md:text-[24px] text-[16px] font-bold  items-start text-color text-left md:items-start h-2/5 w-3/5  ">

                            Supercharge sales through the Budi Platform
                        </div>
                        <div className="flex md:text-[16px] text-[16px]  w-3/5 md:w-3/5   items-start    h-full">
                            As delivery fees hit 0, Your customers and all those soon to be are eagerly awating on our Budi platform. Let your products speak for itself without the shopping barrier
                        </div>



                    </div>
                            <div className="w-1/2 flex flex-col py-px items-center lg:h-[35vh] md:h-[45vh]">

                        <div className="flex md:text-[24px] text-[16px] font-bold  items-start text-color text-left md:items-start h-2/5 w-3/5  ">

                            Complete Carbon Neutral logistics scheme.
                        </div>
                        <div className="flex md:text-[16px] text-[16px]  w-3/5 md:w-3/5   items-start    h-full">
                            Rest easy knowing our logistics form warehouse to customer is 100% carbon neutral and even better, carbon positive. With every order via Budi let your customers know its the best way to shop for the planet.
                        </div>



                    </div>
{/* 
                    <div className="w-1/2 flex flex-col py-px items-center lg:h-[35vh] md:h-[45vh]">

                        <div className="flex md:text-[24px] text-[16px] font-bold  items-center text-color justify-center text-center md:items-start h-2/5 w-3/4  ">

                            Complete Carbon Neutral logistics scheme.
                        </div>
                        <div className="flex text-[16px]  w-3/5 md:w-3/5  text-center   items-start    h-full">
                            Rest easy knowing our logistics form warehouse to customer is 100% carbon neutral and even better, carbon positive. With every order via Budi let your customers know its the best way to shop for the planet.
                        </div>



                    </div>

                    <div className="w-1/2 flex flex-col py-px items-center lg:h-[35vh] md:h-[45vh]">

                        <div className="flex md:text-[24px] text-[16px] font-bold  items-center text-color justify-center text-center md:items-start h-2/5 w-3/4  ">

                            Supercharge sales through the Budi Platform
                        </div>
                        <div className="flex text-[16px]  w-3/5 md:w-3/5  text-center   items-start    h-full">
                            As delivery fees hit 0, Your customers and all those soon to be are eagerly awating on our Budi platform. Let your products speak for itself without the shopping barrier
                        </div>



                    </div>
                    <div className="w-1/2 flex flex-col py-px items-center lg:h-[35vh] md:h-[45vh]">

                        <div className="flex md:text-[24px] text-[16px] font-bold  items-center text-color justify-center text-center md:items-start h-2/5 w-3/4  ">
                            Reduce operational cost by upto 80%
                        </div>
                        <div className="flex text-[16px]  w-3/5 md:w-3/5  text-center   items-start    h-full">
                            The Budi magic also enables retailers to fulfil orders all whilst saving on merchant logistic costs. By aggregating orders on the app our software ensures your rates are unbeatable.
                        </div>



                    </div> */}


                </div>
            </div >






        </>


    );


}