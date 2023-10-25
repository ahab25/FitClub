import React from "react";
import './style.scss'
import Hero from "../../components/Hero/Hero";
import Programs from "../../components/Programs/Programs";
import Reasons from "../../components/Reasons/Reasons";
import Plans from "../../components/Plans/Plans";
import Join from "../../components/Join/Join";
import Testimonials from "../../assets/Testimonials/Testimonials";
import Ahab from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Ahab />
    </div>
  );
};

export default HomePage
