import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="banner">
      <div className="innber-banner">
        <h1 className="text-white text-3xl sm:text-6xl font-semibold tracking-widest">
          Football Blog Site
        </h1>

        <div className="flex justify-center items-center text-center">
          <Link
            to="/login"
            className="py-2 hover:text-gray-100 transition-all duration-300 hover:bg-gray-700 rounded-md px-8 font-semibold bg-blue-800 text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="py-2 hover:text-gray-100 transition-all duration-300 hover:bg-gray-700 rounded-md px-8 font-semibold bg-blue-800 text-white"
          >
            Regsiter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
