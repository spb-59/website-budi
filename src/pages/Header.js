import { budi } from "../assests";

function Header() {
    return (
        <nav className="py-2 z-40  bg-opacity-0 ">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">


                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center pr-96">
                            <img className="block lg:hidden h-8 w-auto" src={budi} alt="Workflow" />
                            <img className="hidden lg:block h-8 w-auto" src={budi} alt="Workflow" />
                        </div>

                        <div className="hidden sm:flex sm:items-center gap-3">
                            <button className="nav-button">
                                About Us
                            </button>

                           <button className="nav-button">
                               Partners
                            </button>

                            <button className="nav-button">
                               Mission
                            </button>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button className="bg-white hover:bg-[#7423AE] text-[#7423AE] hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Header;

//    <div className="flex items-center h-16 justify-between"> {/* Use justify-between */}
//             <div className="hidden md:flex items-center space-x-4">

//                 <div className="flex-shrink-0 justify-start pl-20">
//                     <img src={budi} className="w-auto h-8 max-h-16" alt="Logo" />
//                 </div>

//             </div>

//             <div className="hidden md:flex items-center space-x-4">

//                 <div className="flex-aut0 justify-center space-x-4">
//                     <button
//                         // onClick={() => scrollToSection("about")}
//                         className="hover:bg-button-primary hover:text-[#7423AE] px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                         About Us
//                     </button>

//                     <button
//                         // onClick={() => scrollToSection("projects")}
//                         className="hover:bg-button-primary hover:text-[#7423AE] px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                         Mission
//                     </button>

//                     <button
//                         // onClick={() => scrollToSection("contact")}
//                         className="hover:bg-button-primary hover:text-[#7423AE] px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                         Partners
//                     </button>
//                 </div>
//             </div>

//             <div className="hidden md:flex">
//                 <button
//                     className="hover:bg-button-primary hover:text-[#7423AE] px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                     Contact
//                 </button>
//             </div>
//         </div>
