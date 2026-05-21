import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utlis";
import API from "../api/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("Please fill all fields");
    }

    try {
      setLoading(true);

      const response = await API.post("/signup", signupInfo);

      if (response.data.success) {
        handleSuccess(response.data.message);

        setSignupInfo({
          name: "",
          email: "",
          password: "",
        });

        navigate("/login");
      } else {
        handleError(response.data.message);
      }
    } catch (err) {
      const errorMsg =
      err.response?.data?.error || err.response?.data?.message;

    alert(errorMsg || "Something went wrong");
      handleError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">


      <div className="absolute w-[500px] h-[250px] bg-orange-500/20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/6"></div>
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 text-white">

        <h1 className="text-3xl font-bold text-center">
          Create <span className="text-orange-500">Account</span>
        </h1>

        <p className="text-center text-gray-400 mt-2 text-sm">
          Join us and start your fitness journey
        </p>


        <form onSubmit={handleSignup} className="space-y-5 mt-8">

          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={signupInfo.name}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white
            focus:outline-none focus:ring-2 focus:ring-orange-500"
          />


          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={signupInfo.email}
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white
            focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

      
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={signupInfo.password}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white
            focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg
            ${loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-orange-500/20"
              }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <p className="text-center text-sm mt-6 text-gray-400">
          Back to home page{" "}
          <Link
            to="/home"
            className="text-orange-500 font-semibold hover:underline"
          >
            Home
          </Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;