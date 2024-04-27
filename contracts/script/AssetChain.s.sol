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
    address owner = makeAddr("owner");

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        deployedCofo = new COFO(owner);
        vm.stopBroadcast();
    }
}
