import React from "react";

const Job = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      {/* Top section with Company Info, Date, and Save Button */}
      <div className="flex items-center justify-between">
        {/* Company Logo and Details */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Company Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-semibold">Company name</h1>
            <p className="text-gray-600">India</p>
          </div>
        </div>

        {/* Date Posted and Save Button */}
        <div className="flex items-center space-x-6">
          <p className="text-gray-500 text-sm">2 days ago</p>
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            Save
          </button>
        </div>
      </div>

      {/* Title and Description */}
      <div className="mt-4">
        <h1 className="text-xl font-semibold">Job Title</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem
          qui laudantium dolorum asperiores numquam? Ea illo at laborum a.
        </p>
      </div>

      {/* Tags and Details Button */}
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-2.5 py-0.5 rounded">
          Full-Time
        </span>
        <span className="bg-green-100 text-green-600 text-sm font-semibold px-2.5 py-0.5 rounded">
          Remote
        </span>
        <span className="bg-yellow-100 text-yellow-600 text-sm font-semibold px-2.5 py-0.5 rounded">
          Entry Level
        </span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button className="bg-black text-white text-sm font-semibold px-4 py-1 rounded">
          Details
        </button>
        <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded">
          Save for later
        </button>
      </div>
    </div>
  );
};

export default Job;
