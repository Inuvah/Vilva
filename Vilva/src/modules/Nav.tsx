import React from "react";
import { Link } from "react-router";
import logo from "../assets/SVG/logoBlack.svg";
import banner from "../assets/627A5708-Enhanced-NR.jpg";
import logoWhite from "../assets/SVG/logoWhite.svg";

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
        <img src={banner} alt="banner" className="banner" />
        <div className="tbd circle flex-center">
          <p>
            Siden er under konstruktion.
            <br />
            Computer version er første prioritet
            <br />
            Siden bliver opdateret lidt gennem forløbet kan ske fejl :)
          </p>
        </div>
        <div className="banner-logo flex-center">
          <img src={logoWhite} alt="logo white" />
          <p>Fotograf. Visuel Branding. Webdesign</p>
        </div>
      </nav>
    </>
  );
};
export default Nav;
