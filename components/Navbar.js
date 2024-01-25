import React from "react";

import { HashLink as Link } from 'react-router-hash-link';
import Scrollspy from "react-ui-scrollspy";

export default function Navbar() {


  return (

    <div
      className="hidden lg:flex scrollspy z-40 text-gray-100"

    >

      
      <a href="#Services" data-to-scrollspy-id="Services">Services</a>
       <a href="#Services"  data-to-scrollspy-id="Solution">Solution</a>
      <a href="#Services" data-to-scrollspy-id="FAQ's">FAQ's</a>

    </div>
    
  );
}
