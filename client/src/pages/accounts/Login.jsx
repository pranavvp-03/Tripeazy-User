import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl rounded-lg bg-white shadow-xl overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-gradient-to-r bg-gray-800 text-white ">
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
          <form className="mt-6">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />

            <label className="block text-sm font-medium mt-4 text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
              <span
                className="absolute right-4 top-4 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            <p className="text-sm text-gray-800 mt-2 cursor-pointer">Forgot password?</p>
            <button className="w-full bg-gray-800  text-white p-3 mt-4 rounded-lg ">Sign In</button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="flex items-center justify-center w-full border p-3 rounded-lg text-gray-700 hover:bg-gray-100">
            <FaGoogle className="mr-2" /> Continue with Google
          </button>

          <p className="text-xs text-gray-500 mt-4">
            By continuing, you agree to the <span className="text-purple-600">Terms of Use</span> and <span className="text-purple-600">Privacy Policy</span>.
          </p>
          <p className="text-center mt-4 text-gray-600">
            i don't have an account <a href="/register" className="text-gray-800 underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}