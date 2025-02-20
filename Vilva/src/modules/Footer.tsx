import React from "react";
import logo from "../assets/SVG/logoBlack.svg";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import logoWide from "../assets/SVG/logoArtWide.svg";

export const Footer = () => {
  return (
    <>
      <img className="logoArt" src={logoWide} alt="logo art" />
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
