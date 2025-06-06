import React from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router";
import logo from "../assets/SVG/logoBlack.svg";
import banner from "../assets/627A5708-Enhanced-NR.jpg";
import logoWhite from "../assets/SVG/logoWhite.svg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Nav = () => {
  return (
    <>
      <nav className="flex-center-align">
        <div className="navbar">
          <div className="nav-slider"></div>
          <div className="nav-anchor">
            <Link to="/" className="nav-link">
              <img src={logoWhite} alt="logo" />
            </Link>
          </div>
          <div className="nav-anchor">
            <Link to="/SoMe" className="nav-link">
              SoMe
            </Link>
          </div>
          <div className="nav-anchor">
            <Link to="/Workshop" className="nav-link">
              Virksomheder
            </Link>
          </div>
          <div className="nav-anchor">
            <Link to="/Blogs">Blogs</Link>
          </div>
          <div className="nav-anchor">Kontakt</div>
          <div className="nav-anchor">
            Online
            <br />
            Kurser
          </div>
          <div className="nav-anchor">Iværksætteri</div>
        </div>
      </nav>

      <div className="nav-phone">
        <div>
          <div className="burger"></div>
          <div className="burger burger-middle"></div>
          <div className="burger"></div>
        </div>
        <div className="nav-phone-menu">
          <Link to="/SoMe" className="nav-link">
            SoMe
          </Link>
          <Link to="/Workshop" className="nav-link">
            Virksomheder
          </Link>
          <Link to="/Blogs" className="nav-link">
            Blogs
          </Link>
        </div>
      </div>

      <img src={banner} alt="banner" className="banner" />
      <div className="banner-logo flex-center">
        <img src={logoWhite} alt="logo white" className="footerLogo" />
        <p>Fotograf. Visuel Branding. Webdesign</p>
      </div>
    </>
  );
};
export default Nav;
