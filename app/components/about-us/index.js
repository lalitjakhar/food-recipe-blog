import React from "react";
import Hero from "./Hero";
import aboutjson from "./aboutjson";
import PerticularAboutSection from "../commoncomponents/PerticularAboutSection";

const About = () => {
  return (
    <>
      <Hero />
      {aboutjson.map((json, index) => (
        <PerticularAboutSection key={index} data={json} />
      ))}
    </>
  );
};

export default About;
