import { useState } from "react";
import { useAccount } from 'wagmi';
import { useWriteContract } from 'wagmi'
import {abi} from "../../../out/COFO.sol/COFO.json";
import {CofoContractAddress} from "../../../CONSTANTS.json";
import { useChainId } from 'wagmi'


interface IssueCertificateData {
  address: string;
  tokenId: number;
  metadata: string;
  name: string;
  symbol:string;
  description:string;
  uri: string;
}


const IssueCertificateForm: React.FC = () => {
  const { writeContract } = useWriteContract();
  const chainId = useChainId()

  const [formData, setFormData] = useState<IssueCertificateData>({
    address: "",
    tokenId: 0,
    metadata: "",
    name:"",
    symbol:"",
    description:"",
    uri:""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    // Handle number input for tokenId
    const newValue = name === "tokenId" ? parseInt(value) : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Issue Certificate:", formData);
    console.log(chainId);
  //   let  sampleMetaData = [
  //     formData.metadata, // metadataHash
  //     formData.name, // name
  //     formData.symbol, // symbol
  //     formData.description, // description
  //     formData.uri // uri
  // ];

  let metadata = {
    metadataHash: formData.metadata, // Your metadata hash
    name: formData.name,
    symbol:formData.symbol,
    description:formData.description,
    uri: formData.uri 
};
    writeContract({
      abi, address: `0x${CofoContractAddress}`, functionName: "issueCertificate",
      args:[formData.address, formData.tokenId, metadata]
    })
    // You can add logic here to handle form submission, such as sending data to an API
    setFormData({ address: "", tokenId: 0, metadata: "", name : "", symbol:"", description:"", uri:'' });
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Issue Certificate</h2>
      <label htmlFor="address" className="text-gray-700 font-medium mb-2">
        Address:
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <br />

      <label htmlFor="tokenId" className="text-gray-700 font-medium mb-2">
        Token ID:
      </label>
      <input
        type="number"
        id="tokenId"
        name="tokenId"
        value={formData.tokenId}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <br />

    
    <label htmlFor="name" className="text-gray-700 font-medium mb-2">
      MetaData Hash:
    </label>
    <input
      type="text"
      id="metadata"
      name="metadata"
      value={formData.metadata}
      onChange={handleChange}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <br />

    <label htmlFor="name" className="text-gray-700 font-medium mb-2">
      Name:
    </label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <br />
    <label htmlFor="symbol" className="text-gray-700 font-medium mb-2">
      Symbol:
    </label>
    <input
      type="text"
      id="symbol"
      name="symbol"
      value={formData.symbol}
      onChange={handleChange}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <br />

    <label htmlFor="description" className="text-gray-700 font-medium mb-2">
      Description:
    </label>
    <textarea
      id="description"
      name="description"
      value={formData.description}
      onChange={handleChange}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      rows={3}
    />
    <br />

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
<br/>
      <button type="submit" className="bg-indigo-500 text-white font-medium py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Issue
      </button>
    </form>
  );
};

export default IssueCertificateForm;
