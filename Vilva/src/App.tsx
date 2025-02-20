import "./App.css";
import Home from "./sections/Home";
import SoMe from "./sections/SoMe";
import Workshop from "./sections/Workshop";
import { createBrowserRouter, RouterProvider } from "react-router";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase } from "gsap/EasePack";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/SoMe",
    element: <SoMe />,
  },
  {
    path: "/Workshop",
    element: <Workshop />,
  },
]);

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollToPlugin,
  MotionPathPlugin,
  TextPlugin,
  RoughEase,
  CustomEase
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
