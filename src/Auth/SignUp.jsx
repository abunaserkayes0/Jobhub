import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
  const { user, signUpNewUser } = useContext(AuthContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUpNewUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">SignUp</h1>
        <form onSubmit={handelSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
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
            <Link to="/login">Already have an account?</Link>
          </p>
          <div className="py-5">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
