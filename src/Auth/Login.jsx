import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { user, signInUser } = useContext(AuthContext);
  const handelLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    signInUser(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handelLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <p>
            <Link to="/signUp">Create a New account</Link>
          </p>
          <div className="py-5">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
