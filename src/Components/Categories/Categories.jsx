import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = ({ categories }) => {
  return (
    <section className="mb-20">
      <div className="text-center py-5">
        <h2 className="text-3xl font-bold">Job Category List</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          libero.
        </p>
      </div>
      <div className="grid gap-4 my-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
