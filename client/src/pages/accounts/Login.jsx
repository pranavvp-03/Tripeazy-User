import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl rounded-lg bg-white shadow-lg">
        {/* Left Side */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-purple-900 text-white rounded-l-lg">
          <h2 className="text-2xl font-bold mb-4">JOIN WITH US!</h2>
          <p className="text-lg">CHOOSE YOUR DREAM TRAVEL PLACE WITH YOUR FAVOURITE PERSON.</p>
          <div className="mt-6 p-4 bg-white text-black rounded-lg shadow">
            <p className="text-yellow-500">★★★★★</p>
            <p className="text-sm mt-2">
              "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!"
            </p>
            <p className="font-bold mt-2">John D.</p>
            <p className="text-xs text-gray-500">Company CEO</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10">
          <h2 className="text-xl font-semibold">Sign in</h2>
          <form className="mt-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <label className="block text-sm font-medium mt-4">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            <p className="text-sm text-purple-600 mt-2 cursor-pointer">Reset password</p>
            <button className="w-full bg-purple-900 text-white p-2 mt-4 rounded-lg">Sign in</button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="flex items-center justify-center w-full border p-2 rounded-lg text-gray-700">
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
          <p className="text-xs text-gray-500 mt-4">
            By continuing, you agree to the <span className="text-purple-600">Terms of use</span> and <span className="text-purple-600">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
