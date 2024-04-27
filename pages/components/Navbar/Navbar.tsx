import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-indigo-400 to-blue-900 shadow-sm dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl cursor-pointer  font-bold
           text-white dark:text-gray-200">AssetChain</div>
          <div>
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
