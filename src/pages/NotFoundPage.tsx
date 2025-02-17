import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 w-full">
      <div className="bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-6xl font-bold text-green-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="inline-block">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
