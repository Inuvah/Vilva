import React from "react";
import logo from "../assets/SVG/logoWhite.svg";
import { Link } from "react-router";

export const NavNoBanner = () => {
  return (
    <>
      <nav className="flex-center-align">
        <div className="navbar">
          <div className="nav-slider"></div>
          <div className="nav-anchor">
            <Link to="/">
              <img src={logo} alt="logo" className="nav-link" />
            </Link>
          </div>
          <div className="nav-anchor">
            <Link to="/SoMe" className="nav-link">
              SoMe
            </Link>
          </div>
          <div className="nav-anchor">
            <Link to="/Workshop" className="nav-link">
              Virksomheder
            </Link>
          </div>
          <div className="nav-anchor">
            <Link to="/Blogs">Blogs</Link>
          </div>
          <div className="nav-anchor">Kontakt</div>
          <div className="nav-anchor">
            Online
            <br />
            Kurser
          </div>
          <div className="nav-anchor">Iværksætteri</div>
        </div>
        <div className="blog-search-wrapper flex-center">
          <div className="blog-search flex-center">
            <input
              className="blog-input input-style"
              value="Emne"
              type="text"
            />
            <input
              className="blog-input input-style"
              value="Sorter"
              type="text"
            />
            <input
              className="blog-input-search input-style"
              value="Search"
              type="text"
            />
            <input
              className="blog-input input-style"
              value="Dato"
              type="text"
            />
            <input className="blog-input input-style" value="Ryd" type="text" />
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavNoBanner;
