import React from "react";

// import Intro from "../components/Intro";
import About from "../components/About";
import Solution from "../components/Solution";
import Services from "../components/Services";
import Sponsors from "../components/Sponsors";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import EcoServ from "../components/EcoServ";
import InrtoEco from "../components/EcoIntro";

export default function Landing() {

    return (
        <>
            {/* <Intro /> */}
            <InrtoEco />
            <div className="relative">
                <Navbar />

                <EcoServ />

           
                <Services />
                <Solution />

                <About />
                <Sponsors />

            </div>
            <FAQ />
        </>
    );
}
