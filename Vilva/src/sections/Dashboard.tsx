import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import user from "../assets/Icons/seperatorBrown.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router";

gsap.registerPlugin(useGSAP);

export const Dashboard = () => {
  const [dashUserId, setDashUserId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const storedUserId = localStorage.getItem("dashUserId");
    console.log("storedUserId:", storedUserId);
    if (storedUserId !== null) {
      setDashUserId(storedUserId);
      console.log("userId has been set too:" + " " + dashUserId);
    } else {
      console.log("Could not retrive userId!");
      navigate("/Login");
    }
  }, []);

  useGSAP(() => {
    gsap.from(".dash-earlier", {
      y: 1000,
      ease: "out",
      duration: 1.2,
    });
    gsap.from(".dash-test", {
      y: 1000,
      ease: "out",
      duration: 1.5,
    });
    gsap.from(".dash-workshop", {
      y: 1500,
      ease: "out",
      duration: 1.6,
    });
    gsap.from(".dash-nav", {
      x: -1500,
      ease: "out",
      duration: 1.2,
    });
    gsap.from(".dash-user", {
      x: -1500,
      ease: "out",
      duration: 1.5,
    });
    gsap.from(".dash-nav-links", {
      x: -1500,
      ease: "out",
      duration: 1.7,
    });
    gsap.from(".dash-nav-link", {
      x: -1500,
      ease: "in",
      duration: 2.3,
    });
    gsap.from(".dash-banner", {
      x: 1500,
      ease: "in",
      duration: 2,
    });
  }, []);
  console.log(dashUserId);
  return (
    <>
      <div className="dash-body">
        <div className="dash-logo flex-center">
          <img className="images" src={logo} alt="Logo" />
        </div>
        <div className="flex-col">
          <div className="dash-container f-wrap">
            <div className="flex-row">
              <div className="dash-nav flex-center">
                <img className="dash-user" src={user} alt="Bruger Icon" />
                <p className="dash-userTag">{dashUserId}</p>
                <div className="dash-nav-links flex-col flex-a-center">
                  <a href="#" className="dash-nav-link dash-link-top">
                    Indstilinger
                  </a>
                  <a href="#" className="dash-nav-link">
                    Konto
                  </a>
                  <a href="#" className="dash-nav-link">
                    Ordrer
                  </a>
                  <a href="#" className="dash-nav-link">
                    Bedrifter
                  </a>
                </div>
              </div>
              <div className="dash-banner"></div>
            </div>
            <div className="dash-course-wrapper">
              <div className="dash-earlier">
                <h3>Fortsæt dit kursus</h3>
              </div>
              <div className="dash-test">
                <h3>Test din viden</h3>
              </div>
              <div className="dash-workshop">
                <h3>Book en workshop</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
