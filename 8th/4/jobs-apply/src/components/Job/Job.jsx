import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt={company_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <div className="text-[#9873FF]">
          <button className=" mr-4 px-5 py-2 font-medium border border-[#9873FF] rounded">
            {remote_or_onsite}
          </button>
          <button className=" mr-4 px-5 py-2 font-medium border border-[#9873FF] rounded">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex">
          <h1 className="flex mr-2">
            <CiLocationOn className="text-xl"></CiLocationOn>
            {location}
          </h1>
          <h1 className="flex mr-2">
            <CiDollar className="text-xl"></CiDollar>Salary : {salary}
          </h1>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/job/${id}`}>
            <button className="btn bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
