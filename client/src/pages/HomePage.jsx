import React from "react";
import { Header, About, Work, Skills, Testimonial, Footer } from "../container";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
