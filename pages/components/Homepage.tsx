import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero";
import Register from "./Register/Register";
import Admin from "./adminowner/Admin";
import FractionalizeForm from "./FractionilizeContract/Fractionalize";
function Homepage() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Hero />
      </div>
      {/* <Register/>  */}
      {/* <Admin/> */}
      <FractionalizeForm/>
    </div>
  );
}

export default Homepage;
