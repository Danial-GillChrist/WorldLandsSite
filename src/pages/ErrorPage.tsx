import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-red-500">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        The page you are looking for might be temporarily unavailable, moved, or no longer exists.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition duration-300"
      >
        Go Back Home
      </Link>
      <div className="mt-10 text-gray-500 text-sm">
        If the problem persists, contact support.
      </div>
    </div>
  );
};

export default ErrorPage;
