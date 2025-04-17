import React from "react";
import secOneImg from "../assets/landing/627A1924-Enhanced-NR-scaled.jpg";
import secTwoImg from "../assets/landing/627A8637-Enhanced-NR-1-2048x1491.jpg";
import cardWhite from "../assets/landing/attorney-1.png";
import cardBlack from "../assets/landing/attorney-2.png";
import windowImg from "../assets/landing/627A1924-Enhanced-NR-small.jpg";
import phoneIcon from "../assets/landing/smartphone-call.png";
import mailIcon from "../assets/landing/email.png";

export const Landing = () => {
  return (
    <>
      <nav></nav>
      <div className="flex-center landing-sec-one-wrapper">
        <div className="landing-sec-one">
          <div className="landing-text-wrapper">
            <p className="landing-p">Vilva’s website har vokseværk</p>
            <h1 className="landing-h1">Undskyld vi roder!...</h1>
            <p className="landing-p-content">
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
        <div className="landing-sec-two flex-center">
          <div className="landing-sec-two-img-wrapper">
            <img src={secTwoImg} alt="Workshop" />
          </div>
          <div className="landing-text-wrapper-two">
            <h2 className="l-h2">Vilva kort fortalt</h2>
            <h3 className="l-h3">
              Vilva er blevet til ud af en kæmpe passion for, at hjælpe
              Iværksætter og små virksomheder, med at skabe salgsplatforme der
              virker.
            </h3>
            <p className="l-p">
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
              <h3>FOTOGRAF</h3>
              <p>
                Alt hvad du har brug for af portrætter og miljø billeder til
                hjemmesiden og SoMe. Eller er du DIY typen, der gerne vil blive
                bedre til at tage produktbilleder, med mobil eller kamera.
              </p>
            </div>
          </div>

          <div className="l-card-two l-card">
            <div className="l-card-color-beige">
              <img src={cardBlack} alt="" />
              <h3>BUSINESS COACH</h3>
              <p>
                Har du brug for hjælp, til at få skabt et solidt fundament under
                din strategi, så din markedføring begynder og sælge for dig.
              </p>
            </div>
          </div>

          <div className="l-card-three l-card">
            <div className="l-card-color-green">
              <img src={cardWhite} alt="" />
              <h3>DIY WEBDESIGN</h3>
              <p>
                Vil du gerne bygge din hjemmeside selv, men du mangler hjælp, så
                er vores webcafe noget for dig.
              </p>
            </div>
          </div>

          <div className="l-card-four l-card">
            <div className="l-card-color-blue">
              <img src={cardWhite} alt="" />
              <h3>WORKSHOP</h3>
              <p>
                Vi laver løbende workshops i alt fra webdesign til
                markedsføring, hold øje med vores kalender her på siden og på
                instagram.
              </p>
            </div>
          </div>

          <div className="l-card-five l-card">
            <div className="l-card-color-beige">
              <img src={cardBlack} alt="" />
              <h3>MOBIL VIDEO</h3>
              <p>
                Optagelse af indhold til SoMe, så du får din egen content
                creator, uden og skulle ansætte.
              </p>
            </div>
          </div>

          <div className="l-card-six l-card">
            <div className="l-card-color-green">
              <img src={cardWhite} alt="" />
              <h3>SALGS TRÆNING</h3>
              <p>
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
          <h4>Velkommen</h4>
          <h5>Jeg hedder Lone Brandt</h5>
        </div>
        <div className="flex-center">
          <p>
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
            <p>Vilva</p>
            <h5>Lad os tage en snak!...</h5>
          </div>
          <div className="l-f-links">
            <div className="l-f-link flex-center-col">
              <img src={mailIcon} alt="Mail icon" />
              <p>Email</p>
              <a href="mailto:Lone@vilva.dk">Lone@vilva.dk</a>
            </div>
            <div className="flex-center-col">
              <img src={phoneIcon} alt="Phone icon" />
              <p>Telefon</p>
              <a href="tel:+4542679011">42679011</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
