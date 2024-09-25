import React, { useState } from "react";
import { Link } from "react-router-dom";

const AvatarPopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsOpen(!isOpen);
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
            <Link
              to="/logout"
              className="w-full text-center py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarPopover;
