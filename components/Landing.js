import React from "react";


import Navbar from "../../components/Navbar";
import FAQ from "../../components/FAQ";
import EcoServ from "../../components/EcoServ";
import InrtoEco from "../../components/EcoIntro";
import Callbtn from "../../components/Callbtn";
import Page from "../../components/page";

export default function Landing() {

    return (
        <>
            <div className="relative min-h-min ">
                {/* <Callbtn /> */}
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
