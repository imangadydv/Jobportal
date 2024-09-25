import React from "react";
import FilterCard from "./jobcomponents/FilterCard.jsx";
import Job from "./jobcomponents/Job.jsx";

const Jobs = () => {
  const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5">
        {/* Filter Section */}
        <div className="w-1/4">
          <FilterCard />
        </div>

        {/* Jobs Section */}
        <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
          {jobsArray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {jobsArray.map((item, index) => (
                <div key={index}>
                  <Job />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
