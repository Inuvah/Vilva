import React from "react";
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

interface Blogs {
  title: string;
  text: string;
  img: string;
  link: string;
  id?: Key | null | undefined;
}

function blogCreate() {
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
        <div className="blogs-wrapper">{blogCreate()}</div>
      </div>
    </>
  );
};
export default Blogs;
