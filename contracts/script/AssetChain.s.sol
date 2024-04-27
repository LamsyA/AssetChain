// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {COFO} from "../src/COFO.sol";
import {Fractionalizer} from "../src/Fractionalizer.sol";
import {FractionalizerFactory} from "../src/FractionalizerFactory.sol";
import {FractionOrderBook} from "../src/FractionOrderBook.sol";

contract AssetChainScript is Script {
    COFO deployedCofo;
    Fractionalizer deployedFractionalizer;
    FractionalizerFactory deployedFractionalizerFactory;
    FractionOrderBook deployedFractionOrderBook;
    address owner = 0x421B0DF6944958D1082a8a527823119AE1F84864;

    function run() public {
        vm.startBroadcast();
        deployedCofo = new COFO(owner);
        deployedFractionalizerFactory = new FractionalizerFactory(address(deployedCofo));
        deployedFractionOrderBook = new FractionOrderBook();
        vm.stopBroadcast();
    }
}
