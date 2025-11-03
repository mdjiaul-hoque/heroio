import React from "react";
import { useNavigate } from "react-router";

const NoAppFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! No App Found</h1>
      <p className="text-lg text-gray-700 mb-6">
        The app you are looking for does not exist or has been removed.
      </p>
      <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
      >
        Go Back
      </button>
    </div>
  );
};

export default NoAppFound;
