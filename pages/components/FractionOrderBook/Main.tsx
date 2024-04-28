import React from 'react';
import CreateOrder from "./CreateOrder";
import FillOrder from "./FillOrder";
import OrderBookGenerator from "./OrderBookGenerator";
import TerminateOrder from "./TerminateOrder";

const Main = () => {
 return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-medium">Order Book</h1>
        {/* Add any additional header elements here */}
      </header>
      <main className="flex flex-grow overflow-hidden">
        <div className="w-full md:w-3/4 px-4 py-4">
          <OrderBookGenerator />
        </div>
        <div className="w-full md:w-1/4 px-4 py-4">
          <div className="mb-4">
            <CreateOrder />
          </div>
          <div className="mb-4">
            <FillOrder />
          </div>
          <div>
            <TerminateOrder />
          </div>
        </div>
      </main>
    </div>
 );
};

export default Main;
