import { useState } from "react"


export default function BoxFAQ({ ques, ans }) {
    const [show, setShow] = useState(false);

    return (


        <div className="flex flex-col ali">
            <div onClick={() => setShow(!show)} className=" hover:text-[#8d8ecc] cursor-pointer font-black text-5xl">
                {ques}
            </div>
            <div className="">
                {show && ans}



            </div>


        </div>




    )



}