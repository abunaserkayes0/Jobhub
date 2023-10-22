import { Card } from "flowbite-react";
import React from "react";

const SingleFeature = ({ job }) => {

  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salary,
  } = job;
  return (
    <>
      <Card>
        <div>
          <img className="max-w-xs max-h-xs" src={logo} alt="" />
        </div>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {job_title}
        </h5>
        <p className="font-semibold text-gray-500 dark:text-gray-400">
          {company_name}
        </p>
        <div>
          <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded mr-3">
            {remote_or_onsite}
          </button>
          <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded mr-3">
            {job_type}
          </button>
        </div>
        <div className="flex">
          <span className="flex mr-2">
            <img src="https://i.ibb.co/DMrGT6r/location.png" alt="" />
            {location}
          </span>
          <span className="flex mx-2">
            <img src="https://i.ibb.co/55nkgTq/money.png" alt="" />
            {salary}
          </span>
        </div>
      </Card>
    </>
  );
};

export default SingleFeature;
