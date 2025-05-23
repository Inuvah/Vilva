//Pages
import "./App.css";
import Home from "./sections/Home";
import SoMe from "./sections/SoMe";
import Workshop from "./sections/Workshop";
import Blogs from "./sections/Blogs";
import Landing from "./sections/Landing";
import Login from "./sections/Login";
import Dashboard from "./sections/Dashboard";
import Kurser from "./sections/Kurser";
import Register from "./sections/Register";

//dependencies
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase } from "gsap/EasePack";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

const queryClient = new QueryClient();

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
  //Saves userId to local storage
  const [userId, setUserId] = useState("");
  console.log(userId);
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
      element: <Login setUserId={setUserId} />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/Kurser",
      element: <Kurser />,
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
