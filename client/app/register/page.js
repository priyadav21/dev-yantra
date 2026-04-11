"use client";

import { useState } from "react";
import Nav from "../components/Nav";

export default function Register() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    errorMsg: "",
    successMsg: "",
    buttonText: "Register",
  });

  const { username, email, password, successMsg, errorMsg, buttonText } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission will go here
    console.log("Form submitted with:", state);
  };

  const handleChange = (name) => (e) => {
    //this means function (name) { return function (e) { ... } }
    setState({
      ...state,
      [name]: e.target.value,
      errorMsg: "",
      successMsg: "",
      buttonText: "Register",
    });
  };

  const registerForm = () => {
    // Logic for handling form submission will go here
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange("username")}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange("email")}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="pasword"
            value={password}
            onChange={handleChange("password")}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {buttonText}
          </button>
        </div>
      </form>
    );
  };

  return (
    <Nav className="w-full justify-center items-center">
      <div className="w-full max-w-md mx-auto mt-8">
        <h1 className="text-6xl"> Register</h1>
        <div className="w-full max-w-md mx-auto mt-8">{registerForm()}</div>
        <div className="w-full max-w-md mx-auto mt-4">
          {JSON.stringify(state)}
        </div>
      </div>
    </Nav>
  );
}
