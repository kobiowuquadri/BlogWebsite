import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="md:flex md:flex-row items-center overflow-x-hidden gap-1">
      <img
        src="/img/player2.webp"
        alt="login-img"
        className="hidden md:block w-[60%] h-screen"
      />

      <form className=" px-10 space-y-5 flex flex-col h-screen justify-center items-center md:w-[40%] sm:w-[70%] w-[100%] mx-auto">
        <h1 className="sm:text-3xl text-2xl text-center ">Sign up</h1>
        <input
          type="text"
          placeholder="Enter Full Name"
          className="placeholder:text-sm focus:outline-none block border border-gray-400 px-3 py-2 rounded-lg md:w-[300px] w-[100%] placeholder:text-black"
        />
        <input
          type="text"
          placeholder="Enter Username"
          className="placeholder:text-sm focus:outline-none block border border-gray-400 px-3 py-2 rounded-lg md:w-[300px] w-[100%] placeholder:text-black"
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="placeholder:text-sm focus:outline-none block border border-gray-400 px-3 py-2 rounded-lg md:w-[300px] w-[100%] placeholder:text-black"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="placeholder:text-sm focus:outline-none block border border-gray-400 px-3 py-2 rounded-lg md:w-[300px] w-[100%] placeholder:text-black"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="placeholder:text-sm focus:outline-none block rounded-lg border border-gray-400 px-3 md:w-[300px] w-[100%] py-2 placeholder:text-black"
        />
        <input
          type="file"
          placeholder="Choose File"
          className="placeholder:text-sm focus:outline-none block rounded-lg border border-gray-400 px-3 md:w-[300px] w-[100%] py-2 placeholder:text-black"
        />
        <button className="block bg-blue-600 hover:bg-blue-700 text-white md:w-[300px] py-2 rounded-lg w-[100%]">
          Sign up
        </button>
        <span className="text-sm">
          Already have an account?
          <Link to="/login" className="ml-1 text-blue-700">
            sign in
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
