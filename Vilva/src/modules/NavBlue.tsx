import React from "react";
import logo from "../assets/SVG/logoBlack.svg";
import banner from "../assets/627A5708-Enhanced-NR.jpg";
import logoWhite from "../assets/SVG/logoWhite.svg";
import { Link } from "react-router";

export const Nav = () => {
  return (
    <>
      <nav className="flex-center-align">
        <div className="navbarBlue">
          <div className="nav-sliderBlue"></div>
          <div className="nav-anchorBlue">
            <Link to="/">
              <img src={logo} alt="logo" className="nav-link" />
            </Link>
          </div>
          <div className="nav-anchorBlue">
            <Link to="/SoMe" className="nav-link">
              SoMe
            </Link>
          </div>
          <div className="nav-anchorBlue">
            <Link to="/Workshop" className="nav-link">
              Virksomheder
            </Link>
          </div>
          <div className="nav-anchorBlue">Blog</div>
          <div className="nav-anchorBlue">Kontakt</div>
          <div className="nav-anchorBlue">
            Online
            <br />
            Kurser
          </div>
          <div className="nav-anchorBlue">Iværksætteri</div>
        </div>
        <img src={banner} alt="banner" className="banner" />
        <div className="tbd circleBlue flex-center">
          <p>
            Siden er under konstruktion.
            <br />
            Computer version er første prioritet
            <br />
            Siden bliver opdateret lidt gennem forløbet kan ske fejl :)
          </p>
        </div>
        <div className="banner-logoBlue flex-center">
          <img src={logoWhite} alt="logo white" />
          <p>Fotograf. Visuel Branding. Webdesign</p>
        </div>
      </nav>
    </>
  );
};
export default Nav;
