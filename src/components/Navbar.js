import React from "react";

import { HashLink as Link } from 'react-router-hash-link';
import Scrollspy from "react-scrollspy";

export default function Navbar() {


  return (

    <Scrollspy
      className="hidden md:flex scrollspy"
      items={[
        
        "Services",
   
        "Solution",
        "FAQ"
      ]}
      currentClassName="isCurrent"
    >
      
      <Link className="link" smooth to="#Services">Services</Link>
      <Link className="link" smooth to="#Solution">Solution</Link>
      <Link className="link" smooth to="#FAQ's">FAQ's</Link>

    </Scrollspy>

  );
}
