import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="md:space-x-6 lg:space-x-12 md:block hidden">
      <Link
        className="font-semibold hover:text-gray-500 duration-300 transition-all"
        to="/"
      >
        Home
      </Link>
      <Link
        className="font-semibold hover:text-gray-500 duration-300 transition-all"
        to="/about"
      >
        About
      </Link>
      <Link
        className="font-semibold hover:text-gray-500 duration-300 transition-all"
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className="py-2 hover:text-gray-100 transition-all duration-300 hover:bg-gray-700 px-5 rounded-md font-semibold  bg-black text-white"
        to="/login"
      >
        Login
      </Link>
      <Link
        className="py-2 hover:text-gray-100 transition-all duration-300 hover:bg-gray-700 px-5 rounded-md font-semibold bg-black text-white"
        to="/register"
      >
        Register
      </Link>
    </div>
  );
}

export default Menu;
