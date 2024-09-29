import React from "react";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-lg mb-2 text-white bg-blue-600 p-2 rounded">
          Welcome to the No.1 job hunt website.
        </p>
        <h1 className="text-5xl font-bold mb-4">
          Search, Apply & Get Your{" "}
          <span className="text-blue-600">Dream Jobs</span>
        </h1>
        <div className="flex items-center w-full rounded-3xl ">
          <input
            type="text"
            placeholder="Enter job title or keyword"
            className="flex-grow mt-4 px-4 py-2 bg-slate-200 text-black rounded-l outline-none shadow-lg focus:shadow-xl transition" // Added flex-grow for input field
          />
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-500 transition">
            Search Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
