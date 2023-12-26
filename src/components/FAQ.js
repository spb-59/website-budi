import BoxFAQ from "./FAQBox";

export default function FAQ() {
    return (
        <section className="flex flex-col items-center justify-center pb-40 pt-20">

            <div className="md:text-4xl font-black mb-8 ">
                Frequently Asked Questions
            </div>


            <div className="flex flex-col md:flex-row items-center justify-center md:flex-auto">
                <div className="flex flex-col md:flex-row items-center justify-center md:w-full md:pt-20 md:pl-56">
                    <div className="flex flex-col items-center md:w-2/5 pb-10">
                        <div className="text-lg mb-4">
                            Contact us for further information
                        </div>
                        <button className="button">
                            Contact us
                        </button>
                    </div>

                    <ul className="flex flex-col w-full pl-2 md:w-4/5">
                        <li className="pb-5">
                            <BoxFAQ
                                ques={"Labore culpa ea dolore qui duis aliquip la ut Veniam esse cupidatat dolor quis dolor elit veniam proident dolore proident ut?"}
                                ans={"Aliquip nulla commodo veniam proident esse. Minim amet sit laborum cupidatat ullamco est aute dolor dolor eu sit velit dolor pariatur. Commodo commodo esse eu ex Lorem amet non nisi consequat labore dolor cupidatat. Eu pariatur ea elit mollit consectetur adipisicing dolor non proident reprehenderit."}
                            />
                        </li>
                        <li className="pb-5">
                            <BoxFAQ
                            ques={"Nisi minim cillum id tempor adipisicing ullamco.Aliqua ex aliqua et ea deserunt reprehenderit culpa?"}
                                ans={"Aliquip nulla commodo veniam proident esse. Minim amet sit laborum cupidatat ullamco est aute dolor dolor eu sit velit dolor pariatur. Commodo commodo esse eu ex Lorem amet non nisi consequat labore dolor cupidatat. Eu pariatur ea elit mollit consectetur adipisicing dolor non proident reprehenderit."}
                            />
                        </li>
                        <li className="pb-5">
                            <BoxFAQ
                                ques={"Labore culpa ea dolore qui duis aliquip la ut Veniam esse cupidatat dolor quis dolor elit veniam proident dolore proident ut?"}
                                ans={"Aliquip nulla commodo veniam proident esse. Minim amet sit laborum cupidatat ullamco est aute dolor dolor eu sit velit dolor pariatur. Commodo commodo esse eu ex Lorem amet non nisi consequat labore dolor cupidatat. Eu pariatur ea elit mollit consectetur adipisicing dolor non proident reprehenderit."}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
