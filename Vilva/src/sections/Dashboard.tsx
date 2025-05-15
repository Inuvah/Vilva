import React from "react";
import logo from "../assets/logo.svg";
import user from "../assets/Icons/seperatorBrown.svg";

export const Dashboard = () => {
  return (
    <>
      <div className="dash-logo flex-center">
        <img className="images" src={logo} alt="Logo" />
      </div>
      <div className="flex-col">
        <div className="dash-container f-wrap">
          <div className="flex-row">
            <div className="dash-nav flex-center">
              <img className="dash-user" src={user} alt="Bruger Icon" />
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
    </>
  );
};
export default Dashboard;
