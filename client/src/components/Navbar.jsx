import React from "react";
import { Button } from "flowbite-react";
import logo from "../assets/logo.svg";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {

  const {navigate,token}=useAppContext()

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      {/* Logo + Brand Name */}
      <div
        className="flex items-center gap-0 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="w-8 sm:w-7" />
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
          BlogBuddy
        </span>
      </div>

      {/* Login Button */}
      <Button
        onClick={() => navigate("/admin")}
        className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer"
      >
        {token?"Dashboard":"Login"}
      </Button>
    </div>
  );
}
