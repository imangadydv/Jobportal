import React from "react";
import FilterCard from "./jobcomponents/FilterCard.jsx";
import Job from "./jobcomponents/Job.jsx";
import {useSelector} from 'react-redux';

const Jobs = () => {
  
const {allJobs} =useSelector(store=>store.job)
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5">
        {/* Filter Section */}
        <div className="w-1/4">
          <FilterCard />
        </div>

        {/* Jobs Section */}
        <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
          {allJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {allJobs.map((job) => (
                <div key={job._id}>
                  <Job job={job}/>
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
