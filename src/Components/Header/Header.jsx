import { Button, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar rounded>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white">
            JobHub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-purple-500">Start Journey</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">Home</Link>
          {user && (
            <>
              {" "}
              <Link to="/statistics">Statistics</Link>
              <Link to="/applied-jobs">Applied Jobs</Link>
              <Link to="/blog">Blog</Link>
            </>
          )}
          {user ? (
            <button onClick={logOut}>SignOut</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
