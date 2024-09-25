import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { USER_API_END_POINT } from "../../utils/constants.js";
import { setUser } from "../../redux/authSlice.js";
import { useDispatch } from 'react-redux';
const Login = () => {

   const [input, setInput] = useState({
    email:"",
    password:"",
    role:""
   });
 const navigate = useNavigate();
 const dispatch = useDispatch();
   const changeEventHandler = (e)=>{
   setInput({
    ...input,[e.target.name]:e.target.value
   });
   }

   const loginHandler = async (e) => {
    e.preventDefault();
  
    const payload = {
      email: input.email,
      password: input.password,
      role: input.role,
    };
  
    try {
      
      const res = await fetch(`${USER_API_END_POINT}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include", 
      });
  
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      // Handle successful login
      dispatch(setUser(data.user));
      navigate("/");
      toast.success(data.message);
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message);
    }
   
  };
  
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden pt-0">
      <form onSubmit={loginHandler} className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <div className="mb-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
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
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
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
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <span>
            Create new account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
