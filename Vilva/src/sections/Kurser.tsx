import React from "react";
import logo from "../assets/logo.svg";
import db from "../db/db.json";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Background decorations
import bottomCirlce from "../assets/SVG/kurser/bottomCircle.svg";
import centerCircle from "../assets/SVG/kurser/centerCircle.svg";
import topCircle from "../assets/SVG/kurser/topCircle.svg";
import leftSpinner from "../assets/SVG/kurser/leftSpinner.svg";
import rightSpinner from "../assets/SVG/kurser/rightSpinner.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Kurser = () => {
  useGSAP(() => {
    gsap.from(".kurser-h2", {
      opacity: 0,
      ease: "out",
      duration: 2,
    });
    gsap.to(".kurser-decor-lef-spi", {
      rotation: "+=720",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".kurser-decor",
        start: "top 50%",
        end: "bottom",
        scrub: true,
      },
    });
    gsap.to(".kurser-decor-rig-spi", {
      rotation: "-=360",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".kurser-decor",
        start: "top 50%",
        end: "bottom",
        scrub: true,
      },
    });
    gsap.from(".kurser-decor-top-cir", {
      x: 300,
      ease: "out",
      scrollTrigger: {
        trigger: ".kurser-decor",
        start: "top 50%",
        end: "center 50%",
        scrub: true,
      },
    });
    gsap.from(".kurser-decor-bot-cir", {
      x: -600,
      ease: "out",
      scrollTrigger: {
        trigger: ".kurser-decor",
        start: "top 0%",
        end: "center 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="kurser-logo flex-center">
        <img src={logo} alt="Logo" />
      </div>

      <div className="kurser-banner-container">
        <div className="kurser-banner-left"></div>
        <div className="kurser-banner-center">
          <h2 className="kurser-h2">Kurser</h2>
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
