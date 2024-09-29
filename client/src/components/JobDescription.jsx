import React from "react";

const JobDescription = () => {
  const isApplied = true;

  return (
    <div className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Frontend Developer</h1>
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

      {/* Apply Button */}
      <div className="mt-6">
        <button
          disabled={isApplied}
          className={`${
            isApplied ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"
          } py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 disabled:cursor-not-allowed`}
        >
          {isApplied ? "Already applied" : "Apply now"}
        </button>
      </div>

      {/* Job Details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Details</h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Role:</h3>
            <span className="ml-2 text-gray-600">Frontend Developer</span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Location:</h3>
            <span className="ml-2 text-gray-600">Hyderabad</span>
          </div>

          <div className="flex items-start">
            <h3 className="font-medium text-gray-700">Description:</h3>
            <span className="ml-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              perferendis labore sapiente laudantium. Quo enim delectus qui
              beatae, commodi veritatis.
            </span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Experience:</h3>
            <span className="ml-2 text-gray-600">2 years</span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Salary:</h3>
            <span className="ml-2 text-gray-600">12LPA</span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Total Applicants:</h3>
            <span className="ml-2 text-gray-600">5</span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Posted Date:</h3>
            <span className="ml-2 text-gray-600">17-08-2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
