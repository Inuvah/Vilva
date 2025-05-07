import "./App.css";
import Home from "./sections/Home";
import SoMe from "./sections/SoMe";
import Workshop from "./sections/Workshop";
import Blogs from "./sections/Blogs";
import Landing from "./sections/Landing";
import Login from "./sections/Login";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase } from "gsap/EasePack";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/Home",
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
  {
    path: "/Blogs",
    element: <Blogs />,
  },
  {
    path: "/Login",
    element: <Login />,
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
