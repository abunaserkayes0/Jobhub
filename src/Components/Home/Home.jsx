import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import "./Home.css";
import { useEffect, useState } from "react";
const Home = () => {
  const {remain} = useLoaderData();
  console.log(remain);

  return (
    <div className="px-10 container mx-auto">
      <Banner />
      {/* <Categories /> */}
    </div>
  );
};

export default Home;
