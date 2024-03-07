import React from "react";
import Link from 'next/link';
import HomeNav from "./HomeNav";
import LandingPage from "./LandingPage"
import Footer from "./Footer"
import Wellbeing from "./Wellbeing"
import Community from "./Community";
const Home= () => {
  return (
    <div className="flex flex-col">
      <HomeNav/>
      <LandingPage />
      <Wellbeing/>
      <Community/>
      <Footer/>
    </div>


  );
};

export default Home;
