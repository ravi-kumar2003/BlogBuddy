import React from "react";
import { BiHomeAlt,BiBookAdd } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition-all duration-200
          ${isActive 
            ? "bg-purple-100 border-r-4 border-purple-600 text-purple-700 font-medium" 
            : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`
        }
      >
        <BiHomeAlt className="text-xl" />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>

      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition-all duration-200
          ${isActive 
            ? "bg-purple-100 border-r-4 border-purple-600 text-purple-700 font-medium" 
            : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`
        }
      >
        <BiBookAdd  className="text-xl" />
        <p className="hidden md:inline-block">Add blogs</p>
      </NavLink>

      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition-all duration-200
          ${isActive 
            ? "bg-purple-100 border-r-4 border-purple-600 text-purple-700 font-medium" 
            : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`
        }
      >
        <FaRegNewspaper  className="text-xl" />
        <p className="hidden md:inline-block">Blog lists</p>
      </NavLink>

      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition-all duration-200
          ${isActive 
            ? "bg-purple-100 border-r-4 border-purple-600 text-purple-700 font-medium" 
            : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`
        }
      >
        <AiOutlineComment  className="text-xl" />
        <p className="hidden md:inline-block">comments</p>
      </NavLink>
      
      

    </div>
  );
}
