import { useState } from "react"


export default function BoxFAQ({ ques, ans }) {
    const [show, setShow] = useState(false);

    return (


        <div className="flex flex-col  items-start">
            <div onClick={() => setShow(!show)} className=" hover:text-[#8d8ecc] cursor-pointer md:font-black md:text-xl text-[10px]">
                {ques}
            </div>
            <div className="text-[7px] md:text-sm">
                {show && ans}



            </div>


        </div>




    )



}