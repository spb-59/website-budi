import React from "react";


import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import EcoServ from "../components/EcoServ";
import InrtoEco from "../components/EcoIntro";

export default function Landing() {

    return (
        <>
            {/* <Intro /> */}
            <InrtoEco />
            <div className="relative ">
                <Navbar />

                <EcoServ />

          


                {/*                 
                <Services /> */}

                {/* <About /> */}
                {/* <Sponsors /> */}


                <FAQ />
            </div>
        </>
    );
}
