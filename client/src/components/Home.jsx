import React from "react";
import Header from "./homecomponent/Header";
import JobCategoriesCarousel from "./homecomponent/JobCarousel";
import LatestJob from "./homecomponent/LatestJob";
import useGetAllJobs from "../hooks/useGetAllJobs";

const Home = () => {
  useGetAllJobs();
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6">
      <Header/>
      <JobCategoriesCarousel/>
      <LatestJob/>
    </div>
  );
};

export default Home;
