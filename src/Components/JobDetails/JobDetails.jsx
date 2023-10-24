import React from "react";
import { useLoaderData } from "react-router-dom";
import "./JobDetails.css";
import { Button, Card } from "flowbite-react";
const JobDetails = () => {
  const { findingJob } = useLoaderData();
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information: { address, email, phone },
    job_title,
    salary,
  } = findingJob;
  return (
    <>
      <div className="jobs-details_heading">
        <h2 className="text-3xl font-bold text-center py-20">Job Details</h2>
      </div>
      <div className="grid grid-cols-2 gap-12 p-20">
        <div>
          <p>
            <b>Job Description:</b>
            {job_description}
          </p>
          <br />
          <p>
            <b>Job Responsibility:</b>
            {job_responsibility}
          </p>
          <br />
          <p>
            <b>
              Educational Requirement:
              <br />
            </b>
            {educational_requirements}
          </p>
          <br />
          <p>
            <b>Experience:</b>
            <br />
            {experiences}
          </p>
        </div>
        <div className="flex place-content-center">
          <Card className="max-w-sm bg-purple-200">
            <div>
              <p className="font-semibold mb-1">Job Details:</p>
              <hr className="border-gray-600 mb-2" />
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/5jCd2V8/calendar.png" alt="" />
                <b>Salary:</b>
                {job_title}
              </p>
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/Kq6B9Xn/money.png" alt="" />
                <b>Job-Title:</b>
                {salary}
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Contact Information:</p>
              <hr className="border-gray-600 mb-2" />
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/qjy9bHG/location.png" alt="" />
                <b>Address:</b>
                {address}
              </p>
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/GQCC7Z4/email.png" alt="" />
                <b>Email:</b>
                {email}
              </p>
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/x59zJWG/phone.png" alt="" />
                <b>Phone:</b>
                {phone}
              </p>
            </div>
            <Button className="bg-purple-700 text-white">
              <p>Read more</p>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
