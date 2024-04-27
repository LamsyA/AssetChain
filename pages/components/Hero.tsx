import React from "react";

function Hero() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-gray-800">
          Tokenize Your Assets
        </h1>
        <p className="text-lg sm:text-xl text-center mb-8 text-gray-600">
          Unlock the potential of your assets through tokenization. Whether
          it's real estate, artwork, intellectual property, or any other
          valuable asset, tokenization allows you to divide ownership into
          digital tokens, making them more accessible for investment and
          liquidity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
            Get Started
          </button>
          <a
            href="#learn-more"
            className="text-blue-600 font-bold hover:text-blue-800 hover:underline transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      <div id="learn-more" className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Why Tokenize Real World Assets?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Increased Liquidity</h3>
            <p className="text-gray-600">
              Tokenization allows for fractional ownership, making it easier
              for investors to buy and sell shares of an asset.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Accessibility</h3>
            <p className="text-gray-600">
              Digital tokens can be traded 24/7 on global markets, providing
              access to a broader range of investors.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Lower Barriers to Entry</h3>
            <p className="text-gray-600">
              Tokenization allows smaller investors to participate in asset
              ownership that was previously only available to large
              institutions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Automated Compliance</h3>
            <p className="text-gray-600">
              Smart contracts on the blockchain ensure compliance with
              regulatory requirements and increase transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
