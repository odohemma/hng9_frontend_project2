import React from "react";
import hng9ZuriInternshipLogo from "./images/HNG9-Zuri.Internship_Logo.png";
import hng9FooterTextLogo from "./images/HNG-Footer-text.png";
import hngI4g from "./images/HNG-I4G.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={hng9ZuriInternshipLogo} className="hng9-internship-logo" />
      <img src={hng9FooterTextLogo} className="hng9-footer-text-logo" />
      <img src={hngI4g} className="hng9-i4g-logo" />
    </div>
  );
}
