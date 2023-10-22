import { Card } from "flowbite-react";

const Category = ({ category }) => {
  const { availability, category_name, logo } = category;
  return (
    <div>
      <Card>
        <div>
          <img className="bg-purple-100 shadow-lg p-3" src={logo} alt="" />
        </div>
        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {category_name}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {availability}
        </p>
      </Card>
    </div>
  );
};

export default Category;
