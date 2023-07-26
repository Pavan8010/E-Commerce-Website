import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/productcontext";

const About = () => {
  const {myName} = useProductContext();

  const data = {
    name: "Online Ecommerce",
  };

  return <>
   {myName}
   <HeroSection myData={data} />;
  </>
};

export default About;