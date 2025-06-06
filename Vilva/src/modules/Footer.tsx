import React from "react";
import logo from "../assets/SVG/logoBlack.svg";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import logoWide from "../assets/SVG/logoArtWide.svg";
import svgLogo from "../db/svg.json";
const svgLogoData = svgLogo.SVG[0].path;

export const Footer = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_2"
        data-name="Layer 2"
        viewBox="0 0 1818.27 437.96"
      >
        <defs></defs>
        <g id="Layer_3" data-name="Layer 3">
          <path id="footer-logo" className="cls-1" d={svgLogoData} />
        </g>
      </svg>
      <footer>
        <div>
          <img className="logo" src={logo} alt="log" />
        </div>
        <div className="footer-mid flex-center">
          <div>
            <h3>About</h3>
            <p>
              Vestibulum convallis sit amet nisi non lobortis. Nunc pellentesque
              nec ante nec commodo. Ut convallis odio quis metus consequat
              laoreet at at nunc. Phasellus id ipsum metus. Aenean non rutrum
              magna.
            </p>
          </div>
          <div>
            <img src={linkedin} alt="Linked In" />
            <img src={facebook} alt="Facebook" />
            <img src={insta} alt="Instagram" />
          </div>
        </div>
        <div className="footer-right flex-a-center">
          <div>
            <input type="text" value={"e-mail"} readOnly />
          </div>
          <div>
            <button className="button">Nyhedsbrev</button>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
