import React, { useState } from "react";

interface Order {
  owner: string;
  asset: string;
  amount: number;
  price: number;
  paymentToken: string;
  buyable: boolean;
  filled: boolean;
  terminated: boolean;
}

const [state,setState] = useState(false);
const OrderBook: React.FC<{ orders: Order[] }> = ({ orders }) => {
 { orders.length == 0 ? setState(false) : setState(true) }
 if(state){
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-y-auto max-h-96">
      <div className="flex items-center px-4 py-2 font-medium text-gray-700 bg-gray-200">
        <div className="w-1/6">Owner</div>
        <div className="w-1/6">Asset</div>
        <div className="w-1/6">Amount</div>
        <div className="w-1/6">Price</div>
        <div className="w-1/6">Payment Token</div>
        <div className="w-1/6 text-center">Buyable</div>
        <div className="w-1/6 text-center">Filled</div>
        <div className="w-1/6 text-center">Terminated</div>
      </div>
      {orders.map((order) => (
        <OrderRow key={order.owner + order.asset} order={order} />
      ))}
    </div>
  )};
};

const OrderRow: React.FC<{ order: Order }> = ({ order }) => {
  const statusColor = order.buyable ? "text-green-500" : "text-red-500";
  const filledColor = order.filled ? "bg-green-100" : "bg-white";
  const terminatedColor = order.terminated ? "bg-red-100" : "bg-white";

  return (
    <div
      className={`px-4 py-2 border-b border-gray-200 ${filledColor} ${terminatedColor}`}
    >
      <div className="flex items-center">
        <div className="w-1/6 text-ellipsis overflow-hidden">{order.owner}</div>
        <div className="w-1/6 text-ellipsis overflow-hidden">{order.asset}</div>
        <div className="w-1/6">{order.amount.toFixed(4)}</div>
        <div className="w-1/6">{order.price.toFixed(2)}</div>
        <div className="w-1/6 text-ellipsis overflow-hidden">{order.paymentToken}</div>
        <div className="w-1/6 text-center">{<span className={statusColor}>{order.buyable ? "Yes" : "No"}</span>}</div>
        <div className="w-1/6 text-center">{<span className="bg-gray-200 rounded-full px-2">{order.filled ? "Yes" : "No"}</span>}</div>
        <div className="w-1/6 text-center">{<span className="bg-gray-200 rounded-full px-2">{order.terminated ? "Yes" : "No"}</span>}</div>
      </div>
    </div>
  );
};

export default OrderBook;
