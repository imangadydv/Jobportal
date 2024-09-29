import React from "react";
import { useNavigate } from "react-router-dom"; 
import AppliedJobTable from "./profilecomponent/AppliedJobTable";
import { useSelector } from "react-redux";

const Profile = () => {
  
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate(); 
  const handleProfileEdit = () => {
    navigate('/edit-profile'); 
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-4">
          <img
            src="your-profile-picture-url.jpg" 
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h1 className="text-2xl font-semibold">{user?.fullname}</h1>
            <p className="text-gray-600 mt-2">
             {user?.profile?.bio}
            </p>
            <button
              onClick={handleProfileEdit}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Email:</span>
              <span className="text-gray-600">{user?.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Phone:</span>
              <span className="text-gray-600">{user?.phoneNumber}</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          {user?.profile?.skills?.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {user?.profile?.skills.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No skills added yet.</p>
          )}
        </div>

       {/* Resume Section */}
       <div className="mt-6">
  <h2 className="text-xl font-semibold mb-3">Resume</h2>
  {user?.profile?.resume ? (
    <a
      href={`${user.profile.resume.replace('/upload/', '/upload/fl_attachment:')}?filename=${user.profile.resumeOriginalName}`} // Replaces part of the URL to add the attachment flag
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      View Resume
    </a>
  ) : (
    <p className="text-gray-500">No resume uploaded yet.</p>
  )}
</div>




        {/* Applied Jobs Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Applied Jobs</h2>
          <div className="max-w-full bg-white rounded-2xl">
            <AppliedJobTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
