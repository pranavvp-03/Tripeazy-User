// src/pages/TermsAndConditions.jsx
import React from 'react';
import { Link, useNavigate, } from 'react-router-dom';

const TermsAndConditions = () => {

    const navigate = useNavigate()

    const handleGoBack = ()=>{
        navigate(-1)
    }
  return (
    <div className="min-h-screen p-8 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">Welcome to Tripeazy! These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access the service.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">By registering or using Tripeazy, you confirm that you accept these Terms and Conditions and agree to comply with them.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Account Responsibilities</h2>
        <p className="mb-4">You are responsible for maintaining the confidentiality of your account details and password. Notify us immediately if you suspect unauthorized access to your account.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Booking and Payment</h2>
        <p className="mb-4">All bookings are subject to availability. Payments made through our platform are secure. Refund policies will be as per the terms agreed upon at the time of booking.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">4. Content and Conduct</h2>
        <p className="mb-4">You may not post inappropriate content or use our platform for illegal activities. Any breach may result in account suspension or legal action.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">5. Changes to Terms</h2>
        <p className="mb-4">We reserve the right to modify these terms at any time. Changes will be effective upon posting. Your continued use of the platform implies acceptance of the revised terms.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">6. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@tripeazy.com" className="text-blue-500 underline">support@tripeazy.com</a>.</p>

        <button 
          onClick={handleGoBack}
          className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
