import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Key } from "react";
import { useGSAP } from "@gsap/react";
import NavNoBanner from "../modules/NavNoBanner";
import Footer from "../modules/Footer";
import s3Img from "../assets/gifs/Comp 1.gif";
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
          ease: "power1.out",
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
              Jeg hjælper dig både i gang med at skabe content som er pæn og
              fængende, men også at ordentligt planlægge en content schedule så
              det er konsistent. Virkelig lærer dine valgte sociale platforme,
              forstå hvordan du følger med deres konstante skift i algoritmen.
              Alle de store platforme har også en masse data som kan bruges til
              endnu bedre forstå dine kunder.
              <br />
              <br />
              En af de sværeste udfordringer for mange er at skulle filme, især
              ude i det offentlige. Jeg har stået i den samme situation så jeg
              kan give en masse hjælp med at komme over hvor akavet det kan
              være…
              <br />
              <br />
              Er du stadig lidt i tvivl om, hvad SoMe er, så rul helt ned.
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
            Hvis du er interesseret i at se hvilke kurser vi tilbyder, så tryk
            på knappen.
          </p>
          <button>Se mere</button>
        </div>
      </section>
      <div className="wave-container wave-top"></div>
      <section className="SoMe-s3 flex-center wave-container">
        <div className="SoMe-s3-img-wrapper">
          <div className="SoMe-s3-img">
            <img src={s3Img} alt="Lone i et vindue" />
          </div>
        </div>
        <div className="SoMe-s3-text">
          <p>
            SoMe content er en kæmpe del af at opbygge et brand, kunder kan
            komme helt tæt på og få en forståelse af dig eller virksomheden.
            Hvis du kan give et godt indtryk her, har du allerede opbygget et
            positivt brand i deres hovede.
            <br />
            <br />
            SoMe beskriver sig selv ret godt, post content på sociale medier som
            tillader kunder og potentielle kunder at lære dig og din virksomhed
            at kende. Det varierer, hvor personligt det er ud fra hvilken
            virksomhed og hvilket brand de gerne vil have.
            <br />
            <br />
            Det en fantastisk måde for små virksomheder at komme tættere på
            deres kunder, de bliver engageret på en helt anden måde end normale
            reklamer. Reklamer fejler tit med at relatere og så er man bare
            blevet desensibiliseret over for reklamer.
            <br />
            <br />
            Det er en mulighed for at komme tættere på dine kunder og kan bruge
            dine sociale netværk til at bedre forstå dine kunders behov og
            ønsker.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default SoMe;
