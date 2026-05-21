import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utlis";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",

  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginInfo.email || !loginInfo.password) {
      return handleError("Please fill all fields");
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/auth/login",
        loginInfo
      );

      if (response.data.success) {
        handleSuccess(response.data.message);

        const role = response.data.user.role?.trim().toLowerCase();

        localStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem("role", role);
        localStorage.setItem("loggedInUser", response.data.user.name);

        setTimeout(() => {
          if (role === "admin") {
            navigate("/admin", { replace: true });
          } else {
            navigate("/dashboard", { replace: true });
          }
        }, 1200);

      } else {
        handleError(response.data.message);
      }
    } catch (err) {
      handleError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">

      <div className="absolute w-[500px] h-[250px] bg-orange-500/20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 text-white">

        <h1 className="text-3xl font-bold text-center">
          Welcome <span className="text-orange-500">Back</span>
        </h1>

        <p className="text-center text-gray-400 mt-2 text-sm">
          Login to continue your fitness journey
        </p>

        <form onSubmit={handleLogin} className="space-y-5 mt-8">

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={loginInfo.email}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={loginInfo.password}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-orange-500/20"
              }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-500 font-semibold hover:underline">
            Signup
          </Link>
        </p>

        <p className="text-center text-sm mt-6 text-gray-400">
          Back to home page{" "}
          <Link to="/home" className="text-orange-500 font-semibold hover:underline">
            Home
          </Link>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;