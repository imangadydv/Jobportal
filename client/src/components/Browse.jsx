import React from 'react';
import Job from "./jobcomponents/Job";

const randomJobs = [1, 2, 3];

const Browse = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Search Results ({randomJobs.length})
        </h1>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomJobs.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <Job />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
