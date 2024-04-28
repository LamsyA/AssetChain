import React, { useState, useEffect } from "react";
import { useWriteContract, useReadContract } from "wagmi";
import { abi } from "../../../out/FractionOrderBook.sol/FractionOrderBook.json";
import { FractionOrderContract } from "../../../CONSTANTS.json";
import OrderBook from "./OrderBook";

const OrderBookGenerator = () => {
 const { data: hash, writeContract } = useWriteContract();
 const [orders, setOrders] = useState([]); // State to store all orders
 const [tokenId, setTokenId] = useState(""); // State for the token ID

 const { data: orderCount } = useReadContract({
    abi,
    address: `0x${FractionOrderContract}`,
    functionName: "orderCount",
 });

 const numericOrderCount = orderCount as number;
 // Fetch order book data on component mount
 useEffect(() => {
    const fetchAllOrders = async () => {
      if (!orderCount) return; // Skip fetching if order count is not available

      try {
        const allOrders: any = [];
        for (let i = 0; i < numericOrderCount; i++) {
          // Fetch each order asynchronously
          const { data: orderStruct } = await useReadContract({
            abi,
            address: `0x${FractionOrderContract}`,
            functionName: "order",
            args: [i],
          });
          allOrders.push(orderStruct); // Add fetched order data to the array
        }
        setOrders(allOrders); // Update state with all fetched orders
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchAllOrders(); // Call the function to fetch orders
 }, [orderCount]); // Dependencies for effect

 // Handle loading, error, and order data display logic here

 return (
    <>
    <OrderBook  orders={orders}/>
      {/* Order book content using orders state goes here */}
    </>
 );
};

export default OrderBookGenerator;
