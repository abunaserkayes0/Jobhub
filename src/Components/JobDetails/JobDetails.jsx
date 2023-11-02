import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faBriefcase,
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./JobDetails.css";
import { Button, Card, Spinner } from "flowbite-react";
import { addToItem } from "../../LocalStorage/LocalStorage";
const JobDetails = () => {
  const { id } = useLoaderData();
  const [job, setJob] = useState([]);
  const navigate = useNavigate();

  const handelAddToCart = (job) => {
    addToItem(job);
    navigate("/cart");
  };

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
          <Card className="max-w-sm bg-purple-200 border border-gray-500 shadow-2xl">
            <div>
              <p className="font-semibold mb-1">Job Details:</p>
              <hr className="border-gray-600 mb-2" />
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon className="text-purple-500" icon={faDollar} />
                <b>Job Title:</b>
                {job?.job_title}
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  className="text-purple-500"
                  icon={faBriefcase}
                />
                <b>Salary:</b>
                {job?.salary}
              </div>
            </div>
            <div>
              <p className="font-semibold mb-1">Contact Information:</p>
              <hr className="border-gray-600 mb-2" />
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  className="text-purple-500"
                  icon={faLocation}
                />
                <b>Address:</b>
                {job?.contact_information?.address}
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  className="text-purple-500"
                  icon={faMailBulk}
                />
                <b>Email:</b>
                {job?.contact_information?.email}
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon className="text-purple-500" icon={faPhone} />
                <b>Phone:</b>
                {job?.contact_information?.phone}
              </div>
            </div>
            <Button
              onClick={() => handelAddToCart(job)}
              className="bg-purple-700 text-white"
            >
              Applied
            </Button>
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
