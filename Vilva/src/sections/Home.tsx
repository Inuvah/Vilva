import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Key } from "react";
import { useGSAP } from "@gsap/react";
//
import logo from "../assets/SVG/logoBlack.svg";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import s1Img from "../assets/627A5750-Enhanced-NR.jpg";
import logoWide from "../assets/SVG/logoArtWide.svg";
import Nav from "../modules/Nav";
import banner from "../assets/627A5708-Enhanced-NR.jpg";
import logoWhite from "../assets/SVG/logoWhite.svg";
import Footer from "../modules/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const arr = [1, 2, 3, 4];

export const Home = () => {
  useGSAP(() => {
    gsap.to(".s1-circle", {
      rotation: "-=25",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".s1-text",
        start: "top center",
        end: "90% center",
        scrub: true,
        markers: true,
      },
    });

    let tl = gsap.timeline({});
    arr.forEach((num) => {
      tl.from(".h-p-" + num, {
        duration: 0.5,
        y: +800,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".s2",
          start: "top center",
          end: "90% center",
          scrub: true,
        },
      });
    });
  });
  return (
    <>
      <div className="offwhite">
        <Nav />
        <section>
          <div className="h-s1-wrapper flex-a-center">
            <div className="s1-text-wrapper flex-a-center">
              <div className="s1-text">
                <h2>Header</h2>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris at rutrum nibh, quis fringilla sapien. Mauris convallis
                  ligula diam, sit amet suscipit orci auctor in. Vivamus varius,
                  turpis cursus lacinia dapibus, augue risus finibus arcu, nec
                  congue eros massa cursus sem. Praesent feugiat tortor non
                  porttitor posuere. In dapibus elementum ex eget pulvinar. Duis
                  in mi porta, laoreet sapien ut, dignissim libero. Donec
                  gravida eros mollis aliquet sollicitudin. Donec sit amet
                  vestibulum orci. Pellentesque augue nisl, pretium at diam sed,
                  luctus lacinia est. Sed fermentum leo eget mattis iaculis.
                  Vestibulum convallis sit amet nisi non lobortis. Nunc
                  pellentesque nec ante nec commodo. Ut convallis odio quis
                  metus consequat laoreet at at nunc. Phasellus id ipsum metus.
                  Aenean non rutrum magna. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Mauris at rutrum nibh, quis
                  fringilla sapien.
                </p>
                <div className="s1-text-wrapper-circle">
                  <div className="s1-text2">
                    <p>
                      Mauris convallis ligula diam, sit amet suscipit orci
                      auctor in. Vivamus varius, turpis cursus lacinia dapibus,
                      augue risus finibus arcu, nec congue eros massa cursus
                      sem. Praesent feugiat tortor non porttitor posuere. In
                      dapibus elementum ex eget pulvinar. Duis in mi porta,
                      laoreet sapien ut, dignissim libero. Donec gravida eros
                      mollis aliquet sollicitudin. Donec sit amet vestibulum
                      orci. Pellentesque augue nisl, pretium at diam sed, luctus
                      lacinia est. Sed fermentum leo eget mattis iaculis..
                    </p>
                  </div>
                  <div className="s1-circle flex-center">
                    <h3>"Lorem ipsum luctus lacinia est. Sed fermentum. "</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="s1-img flex-j-center">
              <img src={s1Img} alt="billede af Lone" />
            </div>
          </div>
        </section>

        <section className="s2">
          <div className="flex-center">
            <div className="h-s2-circle1 flex-center h-s2-circles">
              <h2>Populære produkter</h2>
            </div>
          </div>
          <div className="h-s2-circle2 h-s2-circles"></div>
          <div className="h-s2-circle3 h-s2-circles"></div>
          <div className="h-s2-circle4 h-s2-circles"></div>
          <div className="h-s2-circle5 h-s2-circles"></div>
          <div className="h-s2-circle6 h-s2-circles"></div>
          <div className="home-products flex-center">
            <div className="home-product h-p-1 flex-center">
              <div className="product-text">
                <h3>produkt</h3>
                <p>Duis in mi porta, laoreet sapien ut, dignissim</p>
              </div>
              <button className="button">Se mere</button>
            </div>
            <div className="home-product h-p-2 flex-center">
              <div className="product-text">
                <h3>produkt</h3>
                <p>Duis in mi porta, laoreet sapien ut, dignissim</p>
              </div>
              <button className="button">Se mere</button>
            </div>
            <div className="home-product h-p-3 flex-center">
              <div className="product-text">
                <h3>produkt</h3>
                <p>Duis in mi porta, laoreet sapien ut, dignissim</p>
              </div>
              <button className="button">Se mere</button>
            </div>
            <div className="home-product h-p-4 flex-center">
              <div className="product-text">
                <h3>produkt</h3>
                <p>Duis in mi porta, laoreet sapien ut, dignissim</p>
              </div>
              <button className="button">Se mere</button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default Home;
