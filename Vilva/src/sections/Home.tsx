import React from "react";
import logo from "../assets/SVG/logoBlack.svg";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import banner from "../assets/627A5708-Enhanced-NR.jpg";
import s1Img from "../assets/627A5750-Enhanced-NR.jpg";
import logoWhite from "../assets/SVG/logoWhite.svg";

export const Home = () => {
  return (
    <>
      <nav className="flex-center-align">
        <div className="navbar">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <a href="#">
            Brand
            <br />
            Fotografering
          </a>
          <a href="#">Virksomheder</a>
          <a href="#">Blog</a>
          <a href="#">Kontakt</a>
          <a href="#">
            Online
            <br />
            Kurser
          </a>
          <a href="#">Iværksætteri</a>
        </div>
        <img src={banner} alt="banner" />
        <div className="tbd circle flex-center">
          <p>
            Siden er under konstruktion.
            <br />
            Computer version er første prioritet
            <br />
            Siden bliver opdateret lidt gennem forløbet kan ske fejl :)
          </p>
        </div>
        <div className="banner-logo flex-center">
          <img src={logoWhite} alt="logo white" />
          <p>Fotograf. Visuel Branding. Webdesign</p>
        </div>
      </nav>

      <section>
        <div className="h-s1-wrapper flex-a-center">
          <div className="s1-text-wrapper flex-a-center">
            <div className="s1-text">
              <h2>Header</h2>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                at rutrum nibh, quis fringilla sapien. Mauris convallis ligula
                diam, sit amet suscipit orci auctor in. Vivamus varius, turpis
                cursus lacinia dapibus, augue risus finibus arcu, nec congue
                eros massa cursus sem. Praesent feugiat tortor non porttitor
                posuere. In dapibus elementum ex eget pulvinar. Duis in mi
                porta, laoreet sapien ut, dignissim libero. Donec gravida eros
                mollis aliquet sollicitudin. Donec sit amet vestibulum orci.
                Pellentesque augue nisl, pretium at diam sed, luctus lacinia
                est. Sed fermentum leo eget mattis iaculis. Vestibulum convallis
                sit amet nisi non lobortis. Nunc pellentesque nec ante nec
                commodo. Ut convallis odio quis metus consequat laoreet at at
                nunc. Phasellus id ipsum metus. Aenean non rutrum magna. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
                rutrum nibh, quis fringilla sapien.
              </p>
              <div className="s1-text-wrapper-circle">
                <div className="s1-text2">
                  <p>
                    Mauris convallis ligula diam, sit amet suscipit orci auctor
                    in. Vivamus varius, turpis cursus lacinia dapibus, augue
                    risus finibus arcu, nec congue eros massa cursus sem.
                    Praesent feugiat tortor non porttitor posuere. In dapibus
                    elementum ex eget pulvinar. Duis in mi porta, laoreet sapien
                    ut, dignissim libero. Donec gravida eros mollis aliquet
                    sollicitudin. Donec sit amet vestibulum orci. Pellentesque
                    augue nisl, pretium at diam sed, luctus lacinia est. Sed
                    fermentum leo eget mattis iaculis..
                  </p>
                </div>
                <div className="s1-circle flex-center">
                  <h3>"Lorem ipsum luctus lacinia est. Sed fermentum. "</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="s1-img flex-j-center">
            <img src={s1Img} alt="eye candy" />
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
          <div className="arrow-left"></div>
          <div className="home-product flex-center">
            <div className="product-text">
              <h3>produkt</h3>
              <p>Duis in mi porta, laoreet sapien ut, dignissim</p>
            </div>
            <button>Se mere</button>
          </div>
          <div className="home-product flex-center">
            <div className="product-text">
              <h3>produkt</h3>
              <p>Duis in mi porta, laoreet sapien ut, dignissim</p>
            </div>
            <button>Se mere</button>
          </div>
          <div className="home-product flex-center">
            <div className="product-text">
              <h3>produkt</h3>
              <p>Duis in mi porta, laoreet sapien ut, dignissim</p>
            </div>
            <button>Se mere</button>
          </div>
          <div className="home-product flex-center">
            <div className="product-text">
              <h3>produkt</h3>
              <p>Duis in mi porta, laoreet sapien ut, dignissim</p>
            </div>
            <button>Se mere</button>
          </div>
          <div className="arrow-right"></div>
        </div>
      </section>

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
            <button>Nyhedsbrev</button>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
