import React from "react";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate= useNavigate();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Company Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-semibold">{job?.company?.name}</h1>
            <p className="text-gray-600">India</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <p className="text-gray-500 text-sm">2 days ago</p>
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            Save
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-semibold">{job?.title}</h1>
        <p className="text-gray-600 mt-2">
         {job?.description}
        </p>
      </div>
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
        <button onClick={()=>{navigate(`/description/${job?._id}`)}} className="bg-black text-white text-sm font-semibold px-4 py-1 rounded">
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
