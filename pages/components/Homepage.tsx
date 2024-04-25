import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
      <Hero/>
      </div>
    </div>
  );
}

export default Homepage;
