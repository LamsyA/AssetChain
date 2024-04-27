import { useState } from "react";

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
    setFormData({
      tokenId: "",
      assetManager: "",
      assetName: "",
      assetSymbol: "",
      assetPrice: "",
      paymentToken: "",
      description: "",
      uri: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-3xl mx-auto p-4 bg-gray-200 rounded-lg shadow-md">
    <h2 className=" text-center mb-4 text-xl font-bold text-gray-800">Fractionalize Asset</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label htmlFor="tokenId" className="text-gray-700 font-medium mb-2">
          Token ID:
        </label>
        <input
          type="text"
          id="tokenId"
          name="tokenId"
          value={formData.tokenId}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="assetManager" className="text-gray-700 font-medium mb-2">
          Asset Manager Address:
        </label>
        <input
          type="text"
          id="assetManager"
          name="assetManager"
          value={formData.assetManager}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="assetName" className="text-gray-700 font-medium mb-2">
          Asset Name:
        </label>
        <input
          type="text"
          id="assetName"
          name="assetName"
          value={formData.assetName}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="assetSymbol" className="text-gray-700 font-medium mb-2">
          Asset Symbol:
        </label>
        <input
          type="text"
          id="assetSymbol"
          name="assetSymbol"
          value={formData.assetSymbol}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="assetPrice" className="text-gray-700 font-medium mb-2">
          Asset Price:
        </label>
        <input
          type="text"
          id="assetPrice"
          name="assetPrice"
          value={formData.assetPrice}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

<label htmlFor="paymentToke" className="text-gray-700 font-medium mb-2">
Payment Token Address:
        </label>
        <input
          type="text"
          id="paymentToken"
          name="paymentToken"
          value={formData.paymentToken}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
  
  <label htmlFor="description" className="text-gray-700 font-medium mb-2">
          Description:
        </label>
        <textarea
        //   type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        /> 
  
  <label htmlFor="uri" className="text-gray-700 font-medium mb-2">
          URI (Optional):
        </label>
        <input
          type="text"
          id="uri"
          name="uri"
          value={formData.uri}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
  
       
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700">
        Fractionalize
      </button>
        </div>
      </form>
    );
  };
  
  export default FractionalizeForm;
  