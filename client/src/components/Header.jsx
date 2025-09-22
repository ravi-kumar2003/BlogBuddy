import React, { useRef } from "react";
import { RiRobot3Line } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative text-center">
      {/* Top Badge */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 shadow-md">
          <p className="text-lg sm:text-xl font-semibold text-purple-800">
            Write Smarter with AI
          </p>
          <span className="text-blue-600">
            <RiRobot3Line size={22} />
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-6xl font-semibold text-gray-700 mt-6">
        Your own <span className="text-blue-700">blogging</span> <br />
        platform.
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
        Start your blogging journey with ease. Create, edit, and publish posts
        effortlessly while reaching readers around the globe.
      </p>

      {/* Search bar */}
      <div className="flex justify-center mt-8">
        <form
          onSubmit={onsubmitHandler}
          className="flex items-center w-full max-w-xl bg-slate-200 shadow-md rounded-full overflow-hidden"
        >
          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blog..."
            required
            className="flex-grow px-4 py-3 text-gray-700 bg-slate-200 outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="text-gray-600 px-6 py-3 flex items-center justify-center hover:bg-gray-300 transition-all"
          >
            <BiSearchAlt2 size={22} />
          </button>
        </form>
      </div>
      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border font-light text-xs py-2 px-3 mt-4 rounded-sm shadow-custom-sm cursor-pointer bg-primary-500 text-white"
          >
            Clear Search
          </button>
        )}
      </div>
    </div>
  );
}
