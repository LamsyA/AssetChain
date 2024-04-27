import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero";
import Register from "./Register/Register";
import Admin from "./adminowner/Admin";
import router, { useRouter } from 'next/router';
import { getAccount } from '@wagmi/core'
import FractionalizeForm from "./FractionilizeContract/Fractionalize";
import Link from "next/link";
function Homepage() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Hero />
      </div>
      
      {/* <Register/>  */}
      <Admin/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button" onClick={() => router.push('/components/FractionilizeContract/Fractionalize/')}>
        {/* <Link href="/components/FractionilizeContract/Fractionalize/"> */}
          Fractionalize
        {/* </Link> */}
      </button>
     
      {/* <FractionalizeForm/> */}
      
    </div>
  );
}

export default Homepage;
