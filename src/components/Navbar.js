import React from "react";

import { HashLink as Link } from 'react-router-hash-link';
import Scrollspy from "react-scrollspy";

export default function Navbar() {


  return (

    <Scrollspy
      className="scrollspy"
      items={[
        "About",
        "Services",
        "Solution",
        "Sponsors"
      ]}
      currentClassName="isCurrent"
    >
      <Link className="link" smooth to="#About">About</Link>
      <Link className="link" smooth to="#Services">Services</Link>
      <Link className="link" smooth to="#Solution">Solution</Link>
      <Link className="link" smooth to="#Sponsors">Sponsors</Link>

    </Scrollspy>

  );
}
