import React from "react";
import { HeroSection, Features, Footer } from "../components/Home";

const Homepage = () => {
  return (
    <div className="home-page">
      <HeroSection />

      <Features />

      <Footer />
    </div>
  );
};

export default Homepage;
