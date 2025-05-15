import React from "react";
import secOneImg from "../assets/landing/627A1924-Enhanced-NR-scaled.jpg";
import secTwoImg from "../assets/landing/627A8637-Enhanced-NR-1-2048x1491.jpg";
import cardWhite from "../assets/landing/attorney-1.png";
import cardBlack from "../assets/landing/attorney-2.png";
import logo from "../assets/logo.svg";
import windowImg from "../assets/landing/627A1924-Enhanced-NR-small.jpg";
import phoneIcon from "../assets/landing/smartphone-call.png";
import mailIcon from "../assets/landing/email.png";

//Animation imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Landing = () => {
  useGSAP(() => {
    gsap.from(".landing-text-wrapper", {
      x: -200,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".landing-text-wrapper-two", {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".landing-sec-two",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from(".l-card", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".landing-sec-two",
        start: "50% center",
        scrub: true,
      },
    });
    gsap.from(".l-4-text-wrapper", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".landing-sec-four",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from(".l-f-wrapper", {
      y: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".landing-sec-four",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from(".l-4-t", {
      y: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".landing-sec-four",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <nav className="flex-center">
        <img src={logo} alt="logo" className="landing-logo" />
      </nav>
      <div className="flex-center landing-sec-one-wrapper">
        <div className="landing-sec-one">
          <div className="landing-text-wrapper">
            <p className="landing-p">Vilva’s website har vokseværk</p>
            <h1 className="landing-h1 raleway">Undskyld vi roder!...</h1>
            <p className="landing-p-content open-sans">
              Men nu er du her, så har vi lavet en side til dig – hvor du kan
              læse mere, indtil Vilva’s nye hjemmeside er klar.
            </p>
          </div>
          <div>
            <img src={secOneImg} alt="Lone" />
          </div>
        </div>
      </div>

      <div className="flex-center">
        <div className="landing-sec-two flex-center f-wrap">
          <div className="landing-sec-two-img-wrapper">
            <img src={secTwoImg} alt="Workshop" />
          </div>
          <div className="landing-text-wrapper-two">
            <h2 className="l-h2 roboto">Vilva kort fortalt</h2>
            <h3 className="l-h3 open-sans">
              Vilva er blevet til ud af en kæmpe passion for, at hjælpe
              Iværksætter og små virksomheder, med at skabe salgsplatforme der
              virker.
            </h3>
            <p className="l-p open-sans">
              Altid med udgangspunkt i dig og din virksomhed, vi kan med 20+ års
              erfaring inden for fotografering, webdesign, business coaching og
              salg, hjælpe dig med at skabe, et rigtigt solidt fundament for dit
              salg.
              <br />
              <br /> Det unikke ved Vilva er, at vi hjælper uanset om du ønsker
              en DIY løsning og bare mangler kompetencer – Eller du ønsker at vi
              skal gøre det hele for dig. Se hvad vi kan gøre for dig og dit
              salg herunder.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-center l-3-wrapper">
        <div className="landing-sec-three flex-center">
          <div className="l-card-one l-card">
            <div className="l-card-color-blue">
              <img src={cardWhite} alt="" />
              <h3 className="nanum-myeongjo-regular">FOTOGRAF</h3>
              <p className="open-sans">
                Alt hvad du har brug for af portrætter og miljø billeder til
                hjemmesiden og SoMe. Eller er du DIY typen, der gerne vil blive
                bedre til at tage produktbilleder, med mobil eller kamera.
              </p>
            </div>
          </div>

          <div className="l-card-two l-card">
            <div className="l-card-color-beige">
              <img src={cardBlack} alt="" />
              <h3 className="nanum-myeongjo-regular">BUSINESS COACH</h3>
              <p className="open-sans">
                Har du brug for hjælp, til at få skabt et solidt fundament under
                din strategi, så din markedføring begynder og sælge for dig.
              </p>
            </div>
          </div>

          <div className="l-card-three l-card">
            <div className="l-card-color-green">
              <img src={cardWhite} alt="" />
              <h3 className="nanum-myeongjo-regular">DIY WEBDESIGN</h3>
              <p className="open-sans">
                Vil du gerne bygge din hjemmeside selv, men du mangler hjælp, så
                er vores webcafe noget for dig.
              </p>
            </div>
          </div>

          <div className="l-card-four l-card">
            <div className="l-card-color-blue">
              <img src={cardWhite} alt="" />
              <h3 className="nanum-myeongjo-regular">WORKSHOP</h3>
              <p className="open-sans">
                Vi laver løbende workshops i alt fra webdesign til
                markedsføring, hold øje med vores kalender her på siden og på
                instagram.
              </p>
            </div>
          </div>

          <div className="l-card-five l-card">
            <div className="l-card-color-beige">
              <img src={cardBlack} alt="" />
              <h3 className="nanum-myeongjo-regular">MOBIL VIDEO</h3>
              <p className="open-sans">
                Optagelse af indhold til SoMe, så du får din egen content
                creator, uden og skulle ansætte.
              </p>
            </div>
          </div>

          <div className="l-card-six l-card">
            <div className="l-card-color-green">
              <img src={cardWhite} alt="" />
              <h3 className="nanum-myeongjo-regular">SALGS TRÆNING</h3>
              <p className="open-sans">
                1:1 coaching og workshops, til dig der mangler viden og
                kompetancer i salg. Her slipper du af med frygten for at sælge.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-sec-four">
        <div>
          <img src={windowImg} alt="Lone" />
        </div>
        <div className="flex-center-col l-4-text-wrapper">
          <h4 className="mulish">Velkommen</h4>
          <h5 className="roboto">Jeg hedder Lone Brandt</h5>
        </div>
        <div className="flex-center l-4-t">
          <p className="mulish">
            Det er mig der er iværksættern der for 11 år siden, begyndte og
            bygge en drøm der i dag er blevet til Vilva. Før mit selvstændige
            liv startede, arbejded jeg i 20+ år, som leder i salg og
            marketingsbranchen, jeg har en buisness coach og div. ledelses
            uddannelser bag mig og den sidste kasket som fotograf, tog jeg på
            for 9 år siden, efter 3 år på en selvbetalt uddannelse, dog har
            kameraet være min trofaste ven siden jeg var 16 år. I dag er Vilva
            og min fotografiske virksomhed blevet en succes og jeg er ikke mere
            et one man team, som jeg var i mange år. Ikke at vi er blevet til
            30, vi er nemlig forsat kun 2, men Oliver er kommet til og han er
            hjernen bag det tunge webdesign og kodning.
          </p>
        </div>
      </div>

      <footer className="l-f">
        <div className="l-f-wrapper flex-center-col">
          <div>
            <p className="open-sans">Vilva</p>
            <h5 className="playfair-display">Lad os tage en snak!...</h5>
          </div>
          <div className="l-f-links">
            <div className="l-f-link flex-center-col">
              <img src={mailIcon} alt="Mail icon" />
              <p className="playfair-display">Email</p>
              <a href="mailto:Lone@vilva.dk">Lone@vilva.dk</a>
            </div>
            <div className="flex-center-col l-f-w">
              <img src={phoneIcon} alt="Phone icon" />
              <p className="playfair-display">Telefon</p>
              <a href="tel:+4542679011">42679011</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
