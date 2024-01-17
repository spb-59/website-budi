import React from "react";


import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import EcoServ from "../components/EcoServ";
import InrtoEco from "../components/EcoIntro";

import Page from "../components/page";

export default function Landing() {

    return (
        <>
            <div className="relative min-h-min ">
            
                <InrtoEco />

                <div className="relative ">
                    <Navbar />

                    <EcoServ />
                    <Page />
                    <FAQ />
                </div>
            </div>
        </>
    );
}
