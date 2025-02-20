import React from "react";
import Nav from "../modules/NavBlue";
import workshopCss from "../css/workshop.css";
import Portrait from "../assets/627A5735-Enhanced-NR.jpg";
import Mockup from "../assets/SVG/mockup.svg";
import Footer from "../modules/Footer";

export const Workshop = () => {
  return (
    <>
      <Nav />
      <section className="workshop-s1 flex-center">
        <div className="workshop-s1-circle flex-center s1-circle-1">
          <h2>Header</h2>
        </div>
        <div className="workshop-s1-circle s1-circle-2"></div>
        <div className="workshop-s1-text flex-a-center">
          <div className="workshop-s1-text-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
              rutrum nibh, quis fringilla sapien. Mauris convallis ligula diam,
              sit amet suscipit orci auctor in.
              <br />
              <br />
              Vivamus varius, turpis cursus lacinia dapibus, augue risus finibus
              arcu, nec congue eros massa cursus sem. Praesent feugiat tortor
              non porttitor posuere. In dapibus elementum ex eget pulvinar.
              <br />
              <br />
              Duis in mi porta, laoreet sapien ut, dignissim libero. Donec
              gravida eros mollis aliquet sollicitudin. Donec sit amet
              vestibulum orci. Pellentesque augue nisl, pretium at diam sed,
              luctus lacinia est. <br />
              <br />
              Sed fermentum leo eget mattis iaculis. Vestibulum convallis sit
              amet nisi non lobortis. Nunc pellentesque nec ante nec commodo.
              <br />
              <br />
              Ut convallis odio quis metus consequat laoreet at at nunc.
              Phasellus id ipsum metus. Aenean non rutrum magna.
            </p>
          </div>
        </div>
        <div>
          <img src={Portrait} alt="portrait" />
        </div>
      </section>

      <section className="workshop-s2 flex-center-col">
        <div className="flex-center workshop-s2-wrapper">
          <div className="workshop-s2-mockup">
            <div className="workshop-s2-mockup-price flex-center">
              <span>499.dkk</span>
            </div>
            <img src={Mockup} alt="mockups" />
          </div>
          <div className="workshop-s2-text-wrapper flex-j-left">
            <div className="workshop-s2-text flex-c-center">
              <h2>Content creation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                at rutrum nibh, quis fringilla sapien. Mauris convallis ligula
                diam, sit amet suscipit orci auctor in. Vivamus varius, turpis
                cursus lacinia dapibus, augue risus finibus arcu, nec congue
                eros massa cursus sem. Praesent
              </p>
              <button className="buttonBlue">Køb her</button>
            </div>
          </div>
        </div>

        <div className="flex-center workshop-s2-wrapper">
          <div className="workshop-s2-text-wrapper">
            <div className="workshop-s2-text">
              <h2>Content creation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                at rutrum nibh, quis fringilla sapien. Mauris convallis ligula
                diam, sit amet suscipit orci auctor in. Vivamus varius, turpis
                cursus lacinia dapibus, augue risus finibus arcu, nec congue
                eros massa cursus sem. Praesent
              </p>
              <button className="buttonBlue">Køb her</button>
            </div>
          </div>
          <div className="workshop-s2-mockup">
            <div className="workshop-s2-mockup-price flex-center">
              <span>499.dkk</span>
            </div>
            <img src={Mockup} alt="mockups" />
          </div>
        </div>
      </section>

      <section className="workshop-s3">
        <div className="workshop-s3-text">
          <h2>Header</h2>
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
export default Workshop;
