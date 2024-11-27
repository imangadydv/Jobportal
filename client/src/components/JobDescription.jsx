import React, { useEffect, useState } from "react";
import {
  APPLICANTION_API_END_POINT,
  JOB_API_END_POINT,
} from "../utils/constants";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "../redux/jobSlice";

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const { user } = useSelector((store) => store.auth);
  const { singleJob } = useSelector((store) => store.job);
  const isInitallyApplied = singleJob?.applications?.some(
    (application) => application.applicant === user?._id || false
  );
  const [isApplied, setIsApplied] = useState(isInitallyApplied);
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await fetch(`${APPLICANTION_API_END_POINT}/apply/${jobId}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        setIsApplied(true);
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        toast.success(data.message);
        dispatch(setSingleJob(updatedSingleJob));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await fetch(`${JOB_API_END_POINT}/get/${jobId}`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        if (data.success) {
          dispatch(setSingleJob(data.job));
          setIsApplied(
            data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
          toast.success(data.message);
        } else {
          console.error("Failed to fetch jobs:", data.message);
        }
      } catch (error) {
        console.log("Error fetching jobs:", error);
      }
    };
  
    fetchSingleJob();
  }, [jobId, dispatch]);
  return (
    <div className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">{singleJob?.title}</h1>
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
          onClick={isApplied ? null : applyJobHandler}
          className={`${
            isApplied ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"
          } py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 disabled:cursor-not-allowed`}
        >
          {isApplied ? "Already applied" : "Apply now"}
        </button>
      </div>

      {/* Job Details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Job Details
        </h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Role:</h3>
            <span className="ml-2 text-gray-600">{singleJob?.title}</span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Location:</h3>
            <span className="ml-2 text-gray-600">{singleJob?.location}</span>
          </div>

          <div className="flex items-start">
            <h3 className="font-medium text-gray-700">Description:</h3>
            <span className="ml-2 text-gray-600">{singleJob?.description}</span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Experience:</h3>
            <span className="ml-2 text-gray-600">
              {singleJob?.experience}yrs
            </span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Salary:</h3>
            <span className="ml-2 text-gray-600">{singleJob?.salary}LPA</span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Total Applicants:</h3>
            <span className="ml-2 text-gray-600">
              {singleJob?.applications.length}
            </span>
          </div>

          <div className="flex items-center">
            <h3 className="font-medium text-gray-700">Posted Date:</h3>
            <span className="ml-2 text-gray-600">
              {singleJob?.createdAt.split("T")[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
