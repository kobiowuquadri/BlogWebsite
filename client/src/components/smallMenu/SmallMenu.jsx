import { Link } from "react-router-dom";

function SmallMenu({ show }) {
  return (
    <div
      className={
        show
          ? "space-x-5 md:hidden transition-all duration-300 flex-col bg-gray-50 fixed top-0 left-[0px] right-0 h-[100vh] w-[70%] space-y-5 pt-7"
          : "space-x-5 md:hidden transition-all duration-300 flex-col bg-gray-50 fixed top-0 left-[-200rem] right-0 h-[100vh] w-[70%] space-y-5 pt-7"
      }
    >
      <Link
        className="block font-semibold hover:text-gray-500 duration-300 transition-all pl-5"
        to="/"
      >
        Home
      </Link>
      <Link
        className="block font-semibold hover:text-gray-500 duration-300 transition-all"
        to="/about"
      >
        About
      </Link>
      <Link
        className="block font-semibold hover:text-gray-500 duration-300 transition-all"
        to="/blog"
      >
        Blog
      </Link>
      <div className="flex gap-5 flex-col">
        <Link
          className=" py-2 hover:text-gray-100 transition-all duration-300 hover:bg-gray-700 rounded-md  w-[50%] font-semibold text-center  bg-black text-white"
          to="/login"
        >
          Login
        </Link>

        <Link
          className=" py-2 hover:text-gray-100 transition-all duration-300 hover:bg-gray-700 text-center rounded-md  w-[50%] font-semibold bg-black text-white"
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default SmallMenu;
