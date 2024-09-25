import React, { useState } from "react";

const skills = []; // Example: An empty skills array

const Profile = () => {
  const [resume, setResume] = useState(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResume(file);
      const url = URL.createObjectURL(file); // Create a URL for the uploaded file
      setResumeUrl(url); // Save the URL to display
      setIsEditing(false); // Reset editing state
    }
  };

  const handleEditResume = () => {
    setIsEditing(true); // Set editing state to true
  };

  const handleResumeDelete = () => {
    setResume(null); // Clear the resume
    setResumeUrl(""); // Clear the URL
    setIsEditing(false); // Reset editing state
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto bg-white border border-gray-300 rounded-2xl shadow-lg p-8">
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <img
            src="your-profile-picture-url.jpg" // Add a valid profile picture URL
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h1 className="text-2xl font-semibold">Full Name</h1>
            <p className="text-gray-600 mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus fugit incidunt perspiciatis dolor necessitatibus unde
              autem harum nulla praesentium earum? Voluptate cum porro alias
              dolorum ex omnis. Sit, fugiat quod.
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
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
              <span className="text-gray-600">angad310501@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Phone:</span>
              <span className="text-gray-600">6386091480</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          {skills.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {skills.map((item, index) => (
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
          {resume ? (
            <div>
              <p className="text-gray-600">Uploaded Resume:</p>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {resume.name}
              </a>
              <p className="mt-2 text-gray-500">
                Click the link above to view or download your resume.
              </p>
              <button
                onClick={handleEditResume}
                className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                Edit Resume
              </button>
              <button
                onClick={handleResumeDelete}
                className="ml-4 mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Delete Resume
              </button>
            </div>
          ) : (
            <div>
              <input
                type="file"
                accept=".pdf,.doc,.docx" // Acceptable file formats
                onChange={handleResumeUpload}
                className="border border-gray-300 rounded-lg p-2"
              />
              <p className="mt-2 text-gray-500">
                Upload your resume (PDF or Word format).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
