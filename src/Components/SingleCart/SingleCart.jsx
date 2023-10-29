import { Button, Card } from "flowbite-react";
import React from "react";

const SingleCart = ({ singleItem }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salary,
  } = singleItem;
  return (
    <>
      <Card>
        <section className="flex justify-between">
          <div className="grid grid-cols-2">
            <div className="grid place-content-center">
              <img className="max-w-xs max-h-xs" src={logo} alt="" />
            </div>
            <div>
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
                <span className="flex mr-2 text-gray-500">
                  <img src="https://i.ibb.co/DMrGT6r/location.png" alt="" />
                  {location}
                </span>
                <span className="flex mx-2 text-gray-500">
                  <img src="https://i.ibb.co/55nkgTq/money.png" alt="" />
                  {salary}
                </span>
              </div>
            </div>
          </div>
          <div className="grid place-content-center">
            <Button className="bg-purple-700 text-white">Delete</Button>
          </div>
        </section>
      </Card>
    </>
  );
};

export default SingleCart;
