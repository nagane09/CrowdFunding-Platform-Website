import { useState } from "react";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {isForgotPassword ? "Forgot Password" : isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Login Form */}
        {isLogin && !isForgotPassword && (
          <form className="mt-4">
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" required />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded mt-2" required />
            <button className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700">
              Login
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              Don't have an account?{" "}
              <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(false)}>
                Sign Up
              </span>
            </p>
            <p className="text-center text-sm text-gray-500 mt-1">
              <span className="text-red-600 cursor-pointer" onClick={() => setIsForgotPassword(true)}>
                Forgot Password?
              </span>
            </p>
          </form>
        )}

        {/* Signup Form */}
        {!isLogin && !isForgotPassword && (
          <form className="mt-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mt-2" required />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" required />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded mt-2" required />
            <button className="w-full bg-green-600 text-white p-2 rounded mt-4 hover:bg-green-700">
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </p>
          </form>
        )}

        {/* Forgot Password Form */}
        {isForgotPassword && (
          <form className="mt-4">
            <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded mt-2" required />
            <button className="w-full bg-yellow-600 text-white p-2 rounded mt-4 hover:bg-yellow-700">
              Reset Password
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              Remembered your password?{" "}
              <span className="text-blue-600 cursor-pointer" onClick={() => { setIsForgotPassword(false); setIsLogin(true); }}>
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
