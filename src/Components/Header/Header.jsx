import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar rounded>
        <Navbar.Brand as={Link}  to="/">
          <span className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white">
            JobHub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-purple-500">Start Journey</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied-jobs">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
