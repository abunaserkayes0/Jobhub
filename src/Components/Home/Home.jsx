import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import "./Home.css";
import Features from "../Features/Features";
const Home = () => {
  const { categories, jobs } = useLoaderData();

  return (
    <div className="px-12 container mx-auto">
      <Banner />
      <Categories categories={categories} />
      <Features jobs={jobs} />
    </div>
  );
};

export default Home;
