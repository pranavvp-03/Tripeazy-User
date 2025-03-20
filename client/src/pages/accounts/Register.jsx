import React, { useState } from 'react';
import ceo from '../../assets/Ceo.png';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.password) newErrors.password = 'Password is required';

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      alert('Account created successfully!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white p-10 flex rounded-2xl shadow-lg">
        {/* Left Section - Form */}
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-6">Create an account</h2>
          <form onSubmit={handleSubmit}>
            {['name', 'phone', 'email', 'password', 'confirmPassword'].map((field) => (
              <div key={field}>
                <input
                  type={field.includes('password') ? 'password' : 'text'}
                  name={field}
                  placeholder={field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 ${errors[field] ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-600'}`}
                />
                {errors[field] && <p className="text-red-500 text-sm mb-2">{errors[field]}</p>}
              </div>
            ))}
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" required />
              I agree to the <Link to="/terms-and-conditions" className="text-gray-600 underline">Terms & Conditions</Link>.
            </div>
            <button type="submit" className="w-full bg-gray-800 text-white p-3 rounded-lg text-lg">Create an account</button>
            <div className="text-center my-2 text-gray-500">OR</div>
            <button className="w-full flex items-center justify-center border p-3 rounded-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-6 h-6 mr-2" />
              Continue with Google
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Already have an account? <a href="/login" className="text-gray-800 underline">Log in instead</a>
          </p>
        </div>

        {/* Right Section - Info */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-gray-800 text-white p-10 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">JOIN WITH US!</h2>
          <p className="text-center mb-6">Choose your dream travel place with your favourite person.</p>
          <div className="text-yellow-400 mb-4">★★★★★</div>
          <p className="italic text-center mb-6">"I've been consistently impressed with the quality of service provided by this website. Highly recommended!"</p>
          <div className="flex items-center">
            <img src={ceo} alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">John D.</p>
              <p className="text-sm">Company CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
