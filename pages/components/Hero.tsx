import React from "react";

function Hero() {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-bg-hero opacity-75"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-white">
            Tokenize Your Assets
          </h1>
          <p className="text-lg sm:text-xl text-center mb-8 text-white">
            Unlock the potential of your assets through tokenization. Whether
            it's real estate, artwork, intellectual property, or any other
            valuable asset, tokenization allows you to divide ownership into
            digital tokens, making them more accessible for investment and
            liquidity.
          </p>
          <div className="flex flex-col sm:flex-row cursor-pointer justify-center items-center gap-8">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
              Get Started
            </button><button className="px-6 py-3 cursor-pointer rounded-full bg-white text-gray-800 font-bold text-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div id="learn-more" className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            Why Tokenize?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-900 cursor-pointer rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-2 cursor-pointer text-white">Increased Liquidity</h3>
              <p className="text-gray-300">
                Tokenization allows for fractional ownership, making it easier
                for investors to buy and sell shares of an asset.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 cursor-pointer shadow-md transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl  font-semibold mb-2 text-white">Global Accessibility</h3>
              <p className="text-gray-300">
                Digital tokens can be traded 24/7 on global markets, providing
                access to a broader range of investors.
              </p>
            </div>
            <div className="bg-gray-900 cursor-pointer rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Lower Barriers to Entry</h3>
              <p className="text-gray-300">
                Tokenization allows smaller investors to participate in asset
                ownership that was previously only available to large
                institutions.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg cursor-pointer p-6 shadow-md transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Automated Compliance</h3>
              <p className="text-gray-300">
                Smart contracts on the blockchain ensure compliance with
                regulatory requirements and increase transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
