import React from "react";
import IssueCertificateForm from "./IssueCertificate"; // Assuming the path is correct
import UpdateCertificateForm from "./UpdateCertificate"; // Assuming the path is correct
import { useAccount } from 'wagmi';

const Admin: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      <IssueCertificateForm />
      <UpdateCertificateForm />
    </div>
  );
};

export default Admin;
