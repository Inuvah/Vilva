import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Key } from "react";
import { useGSAP } from "@gsap/react";
import NavNoBanner from "../modules/NavNoBanner";
import Footer from "../modules/Footer";
import s3Img from "../assets/627A5735-Enhanced-NR.jpg";
import s2Img from "../assets/627A5760-Enhanced-NR.jpg";
import bannerGraphicArray from "../arrays/soMe.json";
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

interface Banner {
  id: Key | null | undefined;
  x: number;
  y: number;
  size: number;
  name: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

function bannerGraphics() {
  console.log(windowHeight, windowWidth);
  return bannerGraphicArray.bannerGraphic.map((banner: Banner) => {
    useGSAP(() => {
      var bannerTl = gsap.timeline({ repeat: 0 });
      bannerTl.to(
        ".SoMe-circle" + banner.id,
        {
          duration: 0.3,
          scaleX: 1,
          scaleY: 1,
          ease: "power1.inOut",
        },
        "0" + banner.id
      );
    });
    return (
      <div
        key={banner.id}
        className={"SoMe-circles SoMe-circle" + banner.id}
        style={{
          left: banner.x / (1920 / windowWidth) + "px",
          top: banner.y / (911 / windowHeight) + "px",
          width: banner.size / (1920 / windowWidth) + "px",
          height: banner.size / (1920 / windowWidth) + "px",
        }}
      >
        <h2 className="SoMe-circles-h">{banner.name}</h2>
      </div>
    );
  });
}

export const SoMe = () => {
  return (
    <>
      <NavNoBanner />
      <div className="SoMe-banner flex-center" id="SoMe-banner">
        {bannerGraphics()}
        <div className="SoMe-banner-h1 flex-center">
          <h1>SoMe</h1>
        </div>
      </div>

      <section className="SoMe-s1 flex-center">
        <div>
          <div className="SoMe-s1-text-wrapper flex-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
              rutrum nibh, quis fringilla sapien. Mauris convallis ligula diam,
              sit amet suscipit orci auctor in. Vivamus varius, turpis cursus
              lacinia dapibus, augue risus finibus arcu, nec congue eros massa
              cursus sem. Praesent feugiat tortor non porttitor posuere. In
              dapibus elementum ex eget pulvinar. Duis in mi porta, laoreet
              sapien ut, dignissim libero. Donec gravida eros mollis aliquet
              sollicitudin. Donec sit amet vestibulum orci. Pellentesque augue
              nisl, pretium at diam sed, luctus lacinia est. Sed fermentum leo
              eget mattis iaculis. Vestibulum convallis sit amet nisi non
              lobortis. Nunc pellentesque nec ante nec commodo. Ut convallis
              odio quis metus consequat laoreet at at nunc. Phasellus id ipsum
              metus. Aenean non rutrum magna.
            </p>
          </div>
        </div>
        <div>
          <img src={s2Img} alt="Lone ser smart ud" />
        </div>
      </section>

      <section className="SoMe-s2 flex-center">
        <div className="flex-center flex-col SoMe-s2-cta">
          <h2 className="h2-white">Header</h2>
          <p className="p-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            rutrum nibh, quis fringilla sapien. Mauris convallis ligula diam,
            sit amet suscipit orci auctor in.
          </p>
          <button>Se mere</button>
        </div>
      </section>

      <section className="SoMe-s3 flex-center wave-container">
        <div className="SoMe-s3-img-wrapper">
          <div className="SoMe-s3-img">
            <img src={s3Img} alt="Lone i et vindue" />
          </div>
        </div>
        <div className="SoMe-s3-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            rutrum nibh, quis fringilla sapien. Mauris convallis ligula diam,
            sit amet suscipit orci auctor in. Vivamus varius, turpis cursus
            lacinia dapibus, augue risus finibus arcu, nec congue eros massa
            cursus sem. Praesent feugiat tortor non porttitor posuere. In
            dapibus elementum ex eget pulvinar. Duis in mi porta, laoreet sapien
            ut, dignissim libero. Donec gravida eros mollis aliquet
            sollicitudin. Donec sit amet vestibulum orci. Pellentesque augue
            nisl, pretium at diam sed, luctus lacinia est. Sed fermentum leo
            eget mattis iaculis. Vestibulum convallis sit amet nisi non
            lobortis. Nunc pellentesque nec ante nec commodo. Ut convallis odio
            quis metus consequat laoreet at at nunc. Phasellus id ipsum metus.
            Aenean non rutrum magna.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default SoMe;
