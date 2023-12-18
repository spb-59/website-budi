import { budi } from "../assests";

function Header() {
    return (
        <nav className="py-2 z-40  bg-opacity-0 ">
            <div className="flex items-center h-16 justify-between"> {/* Use justify-between */}
                <div className="hidden md:flex items-center space-x-4"> 

                    <div className="flex-shrink-0 justify-start">
                        <img src={budi} className="w-auto h-8 max-h-16" alt="Logo" />
                    </div>

                </div>

                <div className="hidden md:flex items-center space-x-4">

                    <div className="flex-aut0 justify-center space-x-4">
                        <button
                            // onClick={() => scrollToSection("about")}
                            className="hover:bg-button-primary hover:text-[#7423AE] px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About Us
                        </button>

                        <button
                            // onClick={() => scrollToSection("projects")}
                            className="hover:bg-button-primary hover:text-[#7423AE] px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Mission
                        </button>

                        <button
                            // onClick={() => scrollToSection("contact")}
                            className="hover:bg-button-primary hover:text-[#7423AE] px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Partners
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex">
                    <button
                        className="hover:bg-button-primary hover:text-[#7423AE] px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
