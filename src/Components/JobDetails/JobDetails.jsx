import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./JobDetails.css";
import { Button, Card, Spinner } from "flowbite-react";
const JobDetails = () => {
  const { id } = useLoaderData();
  const [job, setJob] = useState([]);

  useEffect(() => {
    dataFetching();
  }, [id]);

  const dataFetching = async () => {
    const jobs = await (await fetch("./../../jobs.json")).json();
    const findJob = jobs.find((job) => job.id === id);
    setJob(findJob);
  };

  return Object.keys(job).length ? (
    <>
      <div className="jobs-details_heading">
        <h2 className="text-3xl font-bold text-center py-20">Job Details</h2>
      </div>
      <div className="grid grid-cols-2 gap-12 p-20">
        <div>
          <p>
            <b>Job Description:</b>
            {job?.job_description}
          </p>
          <br />
          <p>
            <b>Job Responsibility:</b>
            {job?.job_responsibility}
          </p>
          <br />
          <p>
            <b>
              Educational Requirement:
              <br />
            </b>
            {job?.educational_requirements}
          </p>
          <br />
          <p>
            <b>Experience:</b>
            <br />
            {job?.experiences}
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
                {job?.job_title}
              </p>
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/Kq6B9Xn/money.png" alt="" />
                <b>Job-Title:</b>
                {job?.salary}
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Contact Information:</p>
              <hr className="border-gray-600 mb-2" />
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/qjy9bHG/location.png" alt="" />
                <b>Address:</b>
                {job?.contact_information?.address}
              </p>
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/GQCC7Z4/email.png" alt="" />
                <b>Email:</b>
                {job?.contact_information?.email}
              </p>
              <p className="flex align-middle font-normal text-gray-700 dark:text-gray-400">
                <img src="https://i.ibb.co/x59zJWG/phone.png" alt="" />
                <b>Phone:</b>
                {job?.contact_information?.phone}
              </p>
            </div>
            <Button className="bg-purple-700 text-white">Applied</Button>
          </Card>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex place-content-center my-80">
      <Spinner
        className="text-purple-500"
        aria-label="Extra small spinner example"
        size="xl"
        />
      </div>
    </>
  );
};

export default JobDetails;
