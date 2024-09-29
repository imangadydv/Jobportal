import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AvatarPopover = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleAvatarClick = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = async () => {
    try {
      const res = await fetch(`${USER_API_END_POINT}/logout`, {
        method: "POST",
        credentials: "include",
      });
  
      // Check if the response is okay
      if (!res.ok) {
        throw new Error("Failed to log out");
      }
  
      // Parse the JSON response
      const data = await res.json();
  
      // Dispatch the logout action
      dispatch(setUser(null));
  
      // Show success message from the response
      toast.success(data.message);
  
      // Navigate to the home page or login page
      navigate("/");
      
    } catch (error) {
      console.log(error);
      // Show error message if logout fails
      toast.error("Logout failed. Please try again.");
    }
  };
  

  return (
    <div className="relative inline-block">
      <img
        src="your-avatar-url.jpg"
        alt="Profile Avatar"
        className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
        onClick={handleAvatarClick}
      />

      {isOpen && (
        <div className="absolute right-0 mt-4 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="flex flex-col items-center space-y-3">
            <img
              src="your-avatar-url.jpg"
              alt="Profile Avatar in Popover"
              className="w-16 h-16 rounded-full border-2 border-gray-300"
            />
            <Link
              to="/profile"
              className="w-full text-center py-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              View Profile
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-center py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarPopover;
