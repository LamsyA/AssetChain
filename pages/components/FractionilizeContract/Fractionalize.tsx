import React, { useState, FormEvent } from "react";
import { useWriteContract } from 'wagmi'
import {abi} from "../../../out/FractionalizerFactory.sol/FractionalizerFactory.json";
import {FractionalizeFactory} from "../../../CONSTANTS.json";

interface FractionalizeData {
  tokenId: string;
  assetManager: string;
  assetName: string;
  assetSymbol: string;
  assetPrice: string;
  paymentToken: string;
  description: string;
  uri: string;
}

const FractionalizeForm: React.FC = () => {
  const { data: hash, 
    isPending,error, writeContract } = useWriteContract();

  const [formData, setFormData] = useState<FractionalizeData>({
    tokenId: "",
    assetManager: "",
    assetName: "",
    assetSymbol: "",
    assetPrice: "",
    paymentToken: "",
    description: "",
    uri: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Fractionalize:", formData);
    // You can add logic here to handle form submission, such as sending data to an API

    try{
      writeContract({
        abi, address: `${FractionalizeFactory}`, functionName: "fractionalize", args:[formData.tokenId, formData.assetManager, formData.assetName, formData.assetSymbol, formData.assetPrice, formData.paymentToken, formData.description, formData.uri]
      }, {
        onSuccess: (data)=>{
          console.log("data:", data)
        },
        onError: (error)=>{
          console.log("data: error ", error)
        }
      })
    } catch (error){
      console.log("error: ", error)
    }
    // setFormData({
    //   tokenId: "",
    //   assetManager: "",
    //   assetName: "",
    //   assetSymbol: "",
    //   assetPrice: "",
    //   paymentToken: "",
    //   description: "",
    //   uri: "",
    // });
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-center mb-4 text-xl font-bold text-gray-800 dark:text-white">Fractionalize Asset</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="tokenId" className="text-gray-700 font-medium mb-2">Token ID:</label>
            <input
              type="text"
              id="tokenId"
              name="tokenId"
              value={formData.tokenId}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="assetManager" className="text-gray-700 font-medium mb-2">Asset Manager Address:</label>
            <input
              type="text"
              id="assetManager"
              name="assetManager"
              value={formData.assetManager}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="assetName" className="text-gray-700 font-medium mb-2">Asset Name:</label>
            <input
              type="text"
              id="assetName"
              name="assetName"
              value={formData.assetName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="assetSymbol" className="text-gray-700 font-medium mb-2">Asset Symbol:</label>
            <input
              type="text"
              id="assetSymbol"
              name="assetSymbol"
              value={formData.assetSymbol}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="assetPrice" className="text-gray-700 font-medium mb-2">Asset Price:</label>
            <input
              type="text"
              id="assetPrice"
              name="assetPrice"
              value={formData.assetPrice}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="paymentToken" className="text-gray-700 font-medium mb-2">Payment Token Address:</label>
            <input
              type="text"
              id="paymentToken"
              name="paymentToken"
              value={formData.paymentToken}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-700 font-medium mb-2">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="uri" className="text-gray-700 font-medium mb-2">URI (Optional):</label>
            <input
              type="text"
              id="uri"
              name="uri"
              value={formData.uri}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700">
          Fractionalize
        </button>
      </div>
    </form>
  );
};

export default FractionalizeForm;
