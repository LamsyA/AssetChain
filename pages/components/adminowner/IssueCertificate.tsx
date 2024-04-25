import { useState } from "react";

interface IssueCertificateData {
  address: string;
  tokenId: number;
  meta: string;
}

const IssueCertificateForm: React.FC = () => {
  const [formData, setFormData] = useState<IssueCertificateData>({
    address: "",
    tokenId: 0,
    meta: "",
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
    // You can add logic here to handle form submission, such as sending data to an API
    setFormData({ address: "", tokenId: 0, meta: "" });
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

      <label htmlFor="meta" className="text-gray-700 font-medium mb-2">
        Meta Data:
      </label>
      <textarea
        id="meta"
        name="meta"
        value={formData.meta}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20 resize-none"
      />
      <br />

      <button type="submit" className="bg-indigo-500 text-white font-medium py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Issue
      </button>
    </form>
  );
};

export default IssueCertificateForm;
