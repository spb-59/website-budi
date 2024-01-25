import React from "react";


import Navbar from "../../components/Navbar";
import FAQ from "../../components/FAQ";
import EcoServ from "../../components/EcoServ";
import InrtoEco from "../../components/EcoIntro";
import Callbtn from "../../components/Callbtn";
import Page from "../../components/page";
import ScrollSpy from "react-ui-scrollspy";

export default function Landing() {

    return (
        <>
            <div className="relative min-h-min ">
                {/* <Callbtn /> */}
                <InrtoEco />

                <div className="relative ">

                    <Navbar />
                    <ScrollSpy>
                        <EcoServ id="1"/>
                        <Page id="2" />
                        <FAQ id="3" />
                    </ScrollSpy>
                </div>
            </div>
        </>
    );
}
