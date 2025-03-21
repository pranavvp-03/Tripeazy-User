import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import axiosInstance from 'src/utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const OtpPopup = ({ onSubmit, onClose, userData }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error,setError] = useState('')
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async () => {
    const otpValue = otp.join('');
    console.log(otp,"otp verification hittted successfully")
    try {
        const response = await axiosInstance.post('/auth/verify-otp',{
          
          name:userData.name,
          phone:userData.phone,
          email:userData.email,
          password:userData.password,
          otp:otpValue,

        });
        console.log(response.data)
        console.log(response.status,'status code')
        if(response.status === 201){
         
            navigate("/login")
            toast.success(response.data.message || "your registration is successfully completed")
        } else {
          console.log("something went wrotn")
            setError(response.data.message || 'OTP verification failed');
            toast.error(error.response?.data?.message || "OTP verification failed");
          }
    } catch (error) {
        console.error('Error verifying OTP:', error);
      setError(error.response?.data?.message || 'Something went wrong');
    }
    
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full relative"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">&times;</button>
        <FaLock className="text-blue-500 mx-auto text-4xl mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-center">Enter OTP</h2>
        <p className="text-gray-500 mb-6 text-center">We’ve sent a 6-digit code to your email</p>

        <div className="flex justify-center gap-2 mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Verify OTP
        </button>
      </motion.div>
    </div>
  );
};

export default OtpPopup;