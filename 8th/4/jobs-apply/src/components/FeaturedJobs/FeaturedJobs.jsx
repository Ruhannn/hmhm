import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(null);
  const numToShow = showAll ? jobs.length : 4;
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs {jobs.length}</h2>
        <p>Discover exciting opportunities that await you!</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, numToShow).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center my-2">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
