import React, { useEffect } from "react";
import Navbar from "./homepage-comps/Navbar";
import Home from "./homepage-comps/Home";
import About from "./homepage-comps/About";
import MyProjects from "./homepage-comps/MyProjects";
import Techs from "./homepage-comps/Techs";
import Contact from "./homepage-comps/Contact";

const HomePage = () => {
  const certificates = [
    { image: "/images/certificates/A-Level-equivalent-a.webp" },
    { image: "/images/certificates/A-Level-equivalent-b.webp" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Techs />
      <MyProjects />
      <Contact />
    </>
  );
};

export default HomePage;
