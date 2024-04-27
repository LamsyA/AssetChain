import React from "react";
import IssueCertificateForm from "./IssueCertificate"; // Assuming the path is correct
import UpdateCertificateForm from "./UpdateCertificate"; // Assuming the path is correct

const Admin: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Certificate of Ownership o
      </h1>
      <IssueCertificateForm />
      <UpdateCertificateForm />
    </div>
    </div>
  );
};

export default Admin;
