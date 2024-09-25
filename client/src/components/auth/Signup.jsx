import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/constants.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
  
    if (input.file) {
      formData.append("file", input.file);
    }
  
    try {
      console.log("Sending request to API:", `${USER_API_END_POINT}/register`);
      
      const response = await fetch(`${USER_API_END_POINT}/register`, {
        method: 'POST',
        body: formData,
        credentials: 'include',  // Same as withCredentials: true in axios
      });
  
      console.log("Response Status:", response.status);
  
      // Check if the response was not ok
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Response Body:", errorData);
  
        // Show appropriate toast based on the error message
        if (errorData.message === "User already exists!") {
            navigate("/login");
          toast.error("User already exists. Please try logging in.");
        } else {
          toast.error(errorData.message || "Registration failed. Please try again.");
        }
        return;
      }
  
      const data = await response.json(); // Parse JSON response
      console.log("Response Data:", data);
  
      if (data.success) {
        navigate("/login");
        toast.success(data.message);  // Success toast
      } else {
        toast.error(data.message || "Failed to register");  // Generic error toast
      }
  
    } catch (error) {
      console.error('Fetch Error:', error.message);
      toast.error("Something went wrong, please try again.");
    }
  };
  
  
  
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden pt-0">
      
      <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
       
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <div className="mb-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={changeEventHandler}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
        <div className="mb-2 flex items-center">
          <div className="mr-4">
            <label className="block text-sm font-medium text-gray-700">
              User
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="mr-1"
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="mr-1"
                />
                Recruiter
              </label>
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="profile-upload"
            >
              Profile
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
        <div className="mt-4 text-center">
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
