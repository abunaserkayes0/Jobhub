import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Jobs from "./Components/Jobs/Jobs";
import Blog from "./Components/Blog/Blog";
import Main from "./Components/Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: async({param}) => {
            const remain =await fetch("categories.json").then((res) => res.json());
            const root = await fetch("jobs.json").then((res) => res.json());
            return { remain, root };
          },
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/applied-jobs",
          element: <Jobs />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
