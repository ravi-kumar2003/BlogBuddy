import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Button } from "flowbite-react";
import OAuth from "../OAuth";

export default function Login() {
  const { axios, setToken } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    // UPDATED: Added a beautiful gradient background
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 to-slate-700">
      {/* UPDATED: Applied a "glassmorphism" effect to the card */}
      <div className="w-full max-w-sm p-6 max-md:m-6 bg-white/10 backdrop-blur-lg border border-slate-700 shadow-xl shadow-gray-800 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-2">
              Welcome to{" "}
              <span className="font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
                BlogBuddy
              </span>
            </h2>
            <h1 className="text-3xl font-bold">
              {/* UPDATED: Text color for better contrast */}
              <span className="text-violet-400">Admin</span>
              <span className="text-white">Login</span>
            </h1>
            {/* UPDATED: Text color for better contrast */}
            <p className="font-light text-amber-400 mt-2">
              Enter your credentials to access the panel
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-6 w-full sm:max-w-md">
            <div className="flex flex-col">
              {/* UPDATED: Text color for better contrast */}
              <label className="text-gray-300">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="your-email@example.com"
                // UPDATED: Input styling for the new background
                className="bg-transparent border-b-2 border-gray-500 p-2 text-white outline-none focus:border-sky-400 transition-colors mb-6 placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col">
              {/* UPDATED: Text color for better contrast */}
              <label className="text-gray-300">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder="your password"
                // UPDATED: Input styling for the new background
                className="bg-transparent border-b-2 border-gray-500 p-2 text-white outline-none focus:border-sky-400 transition-colors mb-6 placeholder:text-gray-500"
              />
            </div>
            {/* UPDATED: Button colors to match the new theme */}
            <button
              type="submit"
              className="w-full py-3 font-medium bg-sky-500 text-white rounded cursor-pointer hover:bg-sky-600 transition-all"
            >
              Login
            </button>

        
          </form>
        </div>
      </div>
    </div>
  );
}
