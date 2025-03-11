import React, { Key } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "../modules/NavNoBanner";
import BlogsPage from "../arrays/soMe.json";
import blogImage from "../assets/627A5750-Enhanced-NRSquare.jpg";
/*Graphics background*/
import topLeftSpinner from "../assets/blogAssets/topLeftSpinner.svg";
import topRightGraphic from "../assets/blogAssets/topRightGraphic.svg";
import middleRightSpinner from "../assets/blogAssets/middleRightSpinner.svg";
import middleLeftGraphic from "../assets/blogAssets/middleLeftEclipseSpinner.svg";
import middleMiddleSpinner from "../assets/blogAssets/middleRightMidSpinner.svg";
import middleLineSpinner from "../assets/blogAssets/middleRightLineSpinner.svg";
import middleArrow from "../assets/blogAssets/middleArrow.svg";
import bottomLeftSpinner from "../assets/blogAssets/bottomLeftSpinner.svg";
/*Graphics background end*/
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const pageHeight = document.documentElement.scrollHeight;

interface Blogs {
  title: string;
  text: string;
  img: string;
  link: string;
  id?: Key | null | undefined;
}
gsap.registerPlugin(useGSAP, ScrollTrigger);

function blogCreate() {
  useGSAP(() => {
    //middle dashed eclipse
    gsap.to(".blog-middle-left-graphic", {
      rotation: "-=720",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".blog-body",
        start: "20% center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    //top left spinner
    gsap.to(".blog-top-left-spinner", {
      rotation: "-=570",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".blog-body",
        start: "20% center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    //middle right spinner
    gsap.to(".blog-middle-spinner", {
      rotation: "+=240",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".blog-body",
        start: "20% center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    //right middle top line
    gsap.to(".blog-middle-line", {
      rotation: "-=570",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".blog-body",
        start: "40% center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    //right middle bottom line
    gsap.to(".blog-middle-line-bottom", {
      rotation: "-=570",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".blog-body",
        start: "40% center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    //right middle elclipse
    gsap.to(".blog-middle-eclipse", {
      rotation: "+=570",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".blog-body",
        start: "40% center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    //bottom left spinner
    gsap.to(".blog-bottom-left-spinner", {
      rotation: "+=570",
      ease: "inOut",
      scrollTrigger: {
        trigger: ".blog-body",
        start: "40% center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    //middle arrow
    gsap.to(".blog-middle-arrow", {
      scaleY: 2.5,
      scaleX: 1.5,
      ease: "inOut",
      scrollTrigger: {
        trigger: ".blog-body",
        start: "40% center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
  });

  return BlogsPage.blogsPage.map((blogs: Blogs) => {
    return (
      <div key={blogs.id} className="flex-center-col blog-post">
        <div className="blog-img-wrapper">
          <img src={blogImage} alt="blog image" className="blog-img" />
        </div>
        <div className="blog-text-wrapper flex-center">
          <div className="flex-center-col blog-text">
            <h2 className="">{blogs.title}</h2>
            <p>{blogs.text}</p>
            <button className="button-rounded">Se Mere</button>
          </div>
        </div>
      </div>
    );
  });
}

export const Blogs = () => {
  return (
    <>
      <div className="blog-body">
        <div className="flex-center">
          <div className="blog-header">
            <h1>Blogs</h1>
          </div>
        </div>
        <Nav />

        <img
          className="blog-top-left-spinner"
          src={topLeftSpinner}
          alt="Graphic animated"
        />
        <img
          className="blog-top-right-graphic"
          src={topRightGraphic}
          alt="Graphic"
        />
        <img
          className="blog-middle-spinner"
          src={middleRightSpinner}
          alt="Imagine the svg"
        />

        <img
          className="blog-middle-left-graphic"
          src={middleLeftGraphic}
          alt="svg"
        />

        <img className="blog-middle-line" src={middleLineSpinner} alt="svg" />
        <img
          className="blog-middle-line-bottom"
          src={middleLineSpinner}
          alt="svg"
        />
        <img
          className="blog-middle-eclipse"
          src={middleMiddleSpinner}
          alt="svg"
        />
        <img className="blog-middle-arrow" src={middleArrow} alt="svg" />
        <img
          className="blog-bottom-left-spinner"
          src={bottomLeftSpinner}
          alt="svg"
        />
        <div className="blogs-wrapper">{blogCreate()}</div>
      </div>
    </>
  );
};
export default Blogs;
