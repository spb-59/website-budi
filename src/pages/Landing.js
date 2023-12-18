import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Intro from "../components/Intro";
import About from "../components/About";
import Solution from "../components/Solution";
import Services from "../components/Services";
import Sponsors from "../components/Sponsors";
import Navbar from "../components/Navbar";
import { useRef } from "react";

export default function Landing() {

    return (
        <div>
            <Intro />

            <div>
                <Navbar />
                <Routes>
                       <Route path="/about" element={<About />} />

                    <Route path="/services" element={<Services />} />
                    <Route path="/solution" element={<Solution />} />
                    <Route path="/sponsors" element={<Sponsors />} />



                </Routes>



            </div>




        </div >
    );
}
