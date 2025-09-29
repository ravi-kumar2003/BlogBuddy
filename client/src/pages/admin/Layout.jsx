import React from "react";
import { assets } from "../../assets/assets";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";

export default function Layout() {
  const { axios, setToken, navigate } = useAppContext();

  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200 bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100">
        <div
          className="flex items-center gap-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.logo} alt="" className="w-8 sm:w-7" />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
            BlogBuddy
          </span>
        </div>

        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-primary-600 text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
