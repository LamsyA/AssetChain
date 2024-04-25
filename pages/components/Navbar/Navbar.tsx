import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
function Navbar() {
  return (
    <div>
      <div className="sticky top-0 z-50  bg-gradient-to-r from-orange-400  to-emerald-400 shadow-lg shadow-slate-300 text-emerald-700  dark:text-white dark:bg-slate-600">
        <div className="  py-4 broder-b-[1px]">
          <div className="flex justify-around">
            <div className="text-3xl text-white font-bold">AssetChain</div>
            <div className="flex place-items-end ">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
