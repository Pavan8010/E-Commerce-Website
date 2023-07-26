import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";
const Home = () => {
  const data = {
    name: "Ecom store",
  };

  return <>
    <HeroSection myData={data} />
    {/* <hr style={{width:"100%"}} /> */}
    <Services />
    {/* <hr /> */}
    <FeatureProduct/>
    {/* <hr /> */}
    <Trusted />
    {/* <hr /> */}
  </>
};

export default Home;
