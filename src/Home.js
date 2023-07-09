import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";
const Home = () => {
  const data = {
    name: "thapa store",
  };

  return <>
    <HeroSection myData={data} />
    <Services />
    <FeatureProduct/>
    <Trusted />
  </>
};

export default Home;
