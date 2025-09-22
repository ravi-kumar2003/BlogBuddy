import React from "react";

export default function NewsLetter() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl shadow-md">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
        Never Miss a Blog
      </h1>

      {/* Description */}
      <p className="text-gray-600 mt-3 max-w-xl">
        Subscribe to get the latest blogs, news, and updates delivered straight
        to your inbox. Stay connected and never miss a story.
      </p>

      {/* Form */}
      <form className="mt-6 flex w-full max-w-md items-center bg-white shadow-md rounded-full overflow-hidden border border-gray-200">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-3 outline-none text-gray-700"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all cursor-pointer" 
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
