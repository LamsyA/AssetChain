import React from "react";

function Hero() {
  return (
    <div>
      <div className="py-20 px-4 sm:px-6 lg:px-8  ">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Tokenize Your Assets
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
          <svg className="absolute animate-pulse" style={{ top: "20%", left: "80%" }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L19.5098 10.1176H30.6275L21.5686 16.9412L25.0784 27.0588L16 20.2353L6.92157 27.0588L10.4314 16.9412L1.37255 10.1176H12.4902L16 0Z" fill="#FFD700">
            <animate attributeName="fill" values="#FFD700; #FBBF24; #FFD700" dur="2s" repeatCount="indefinite"/>
          </path>
        </svg>
            Unlock the potential of your assets through tokenization
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-lg
             hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Get Started
            </button>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
