import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "src/utils/axiosInstance";
import { useDispatch } from "react-redux";
import { loginSuccess } from "src/redux/authSlice";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      try {
        const response = await axiosInstance.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });
      
        const { user, message } = response.data;
      
        dispatch(loginSuccess({ user}));
        toast.success(message || "Login successful!");
        navigate("/");
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred. Please try again.");
      }
    } else {
      console.log("Form has errors");
      toast.error("Please fix the form errors.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl rounded-lg bg-white shadow-xl overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-gradient-to-r bg-gray-800 text-white">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg">Your travel adventures await. Sign in to continue.</p>
          <div className="mt-8 p-4 bg-white text-black rounded-lg shadow">
            <p className="text-yellow-500">★★★★★</p>
            <p className="text-sm mt-2">
              "The best travel platform I've ever used. Booking is a breeze and the experiences are unforgettable!"
            </p>
            <p className="font-bold mt-2">Sarah L.</p>
            <p className="text-xs text-gray-500">Travel Enthusiast</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-semibold text-gray-800">Sign In to Your Account</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

            {/* Password Field */}
            <label className="block text-sm font-medium mt-4 text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <span
                className="absolute right-4 top-4 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

            {/* Forgot Password */}
            <p className="text-sm text-gray-800 mt-2 cursor-pointer">Forgot password?</p>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-gray-800 text-white p-3 mt-4 rounded-lg">
              Sign In
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-In */}
          <button className="flex items-center justify-center w-full border p-3 rounded-lg text-gray-700 hover:bg-gray-100">
            <FaGoogle className="mr-2" /> Continue with Google
          </button>

          {/* Terms and Privacy */}
          <p className="text-xs text-gray-500 mt-4">
            By continuing, you agree to the <span className="text-purple-600">Terms of Use</span> and{" "}
            <span className="text-purple-600">Privacy Policy</span>.
          </p>

          {/* Sign Up Link */}
          <p className="text-center mt-4 text-gray-600">
            I don't have an account <a href="/register" className="text-gray-800 underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}