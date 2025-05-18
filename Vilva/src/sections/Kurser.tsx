import React from "react";
import logo from "../assets/logo.svg";
import db from "../db/db.json";
//Background decorations
import bottomCirlce from "../assets/SVG/kurser/bottomCircle.svg";
import centerCircle from "../assets/SVG/kurser/centerCircle.svg";
import topCircle from "../assets/SVG/kurser/topCircle.svg";
import leftSpinner from "../assets/SVG/kurser/leftSpinner.svg";
import rightSpinner from "../assets/SVG/kurser/rightSpinner.svg";

export const Kurser = () => {
  return (
    <>
      <div className="kurser-logo flex-center">
        <img src={logo} alt="Logo" />
      </div>

      <div className="kurser-banner-container">
        <div className="kurser-banner-left"></div>
        <div className="kurser-banner-center">
          <h2>Kurser</h2>
        </div>
        <div className="kurser-banner-right"></div>
      </div>

      <div className="kurser-decor">
        <img
          className="kurser-decor-bot-cir"
          src={bottomCirlce}
          alt="Baggrund"
        />

        <img
          className="kurser-decor-cen-cir"
          src={centerCircle}
          alt="Baggrund"
        />

        <img className="kurser-decor-top-cir" src={topCircle} alt="Baggrund" />

        <img
          className="kurser-decor-lef-spi"
          src={leftSpinner}
          alt="Baggrund"
        />

        <img
          className="kurser-decor-rig-spi"
          src={rightSpinner}
          alt="Baggrund"
        />
      </div>
    </>
  );
};
export default Kurser;
