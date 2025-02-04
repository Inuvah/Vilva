import React from "react";
import s3Img from "../assets/627A5735-Enhanced-NR.jpg";
import s2Img from "../assets/627A5760-Enhanced-NR.jpg";

export const SoMe = () => {
  return (
    <>
      <div className="SoMe-banner flex-center">
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
          <h2>Header</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            rutrum nibh, quis fringilla sapien. Mauris convallis ligula diam,
            sit amet suscipit orci auctor in.
          </p>
          <button>Se mere</button>
        </div>
      </section>

      <section className="SoMe-s3 flex-center">
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
    </>
  );
};
export default SoMe;
