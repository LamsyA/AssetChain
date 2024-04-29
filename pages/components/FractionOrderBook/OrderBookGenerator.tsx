import React, { useState, useEffect } from "react";
import { useWriteContract, useReadContract } from "wagmi";
import { abi } from "../../../out/FractionOrderBook.sol/FractionOrderBook.json";
import { FractionOrderContract } from "../../../CONSTANTS.json";
import OrderBook from "./OrderBook";

const OrderBookGenerator = () => {
 const { data: hash, writeContract } = useWriteContract();
 const [orders, setOrders] = useState([]); // State to store all orders
 const [tokenState, setTokenState] = useState(true); // State for the token ID

 const { data: orderCount } = useReadContract({
    abi,
    address: `0x${FractionOrderContract}`,
    functionName: "orderCount",
 });

 const numericOrderCount = orderCount as number;

if(orderCount && tokenState ){
console.log("jii")
  let allOrders: any = [];
  for (let i = 0; i < numericOrderCount; i++) {
    // Fetch each order asynchronously
    const { data: orderStruct } = useReadContract({
      abi,
      address: `0x${FractionOrderContract}`,
      functionName: "order",
      args: [1],
    });
    allOrders.push(orderStruct); // Add fetched order data to the array
  }
  setOrders(allOrders);
  setTokenState(false);
}

 // Fetch order book data on component mount
 useEffect(() => {
  console.log("hi")
    setTokenState(true);
 }, []); // Dependencies for effect

 // Handle loading, error, and order data display logic here

 return (
  <>
    {orders.length === 0 ? null : <OrderBook orders={orders} />}
    {/* Order book content using orders state goes here */}
  </>
);

};

export default OrderBookGenerator;
