import React, { useState } from "react";
import SingleFeature from "../SingleFeature/SingleFeature";
import { Button } from "flowbite-react";

const Features = ({ jobs }) => {
  const [data, setData] = useState(jobs.slice(0, 4));
  return (
    <section>
      <div className="text-center py-5">
        <h2 className="text-3xl font-bold">Featured Jobs</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          libero.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {data.map((job) => (
          <SingleFeature key={job.id} job={job} />
        ))}
      </div>
      <div className="flex place-content-center my-5">
        <Button
          className="bg-purple-700 text-white"
          onClick={() => setData(jobs)}
        >
          See All
        </Button>
      </div>
    </section>
  );
};

export default Features;
