import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import "./Home.css";
const Home = () => {
  const {categories,jobs} = useLoaderData();
  
  return (
    <div className="px-10 container mx-auto">
      <Banner />
      <Categories categories={categories}/>
    </div>
  );
};

export default Home;
