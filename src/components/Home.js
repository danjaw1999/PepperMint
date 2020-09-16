import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Form from "./Form";


const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeFourSteps />
      <HomeAboutUs />
      <WhoWeHelp />
      <Form />
    </>
  );
};

export default Home;
