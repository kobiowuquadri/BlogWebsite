import { Link } from "react-router-dom";

import { FaBars, FaHome } from "react-icons/fa";
function Another() {
  return (
    <div className="flex justify-between mt-20 px-4 ">
      <FaBars className="md:hidden block font-semibold text-2xl mt-6" />
      <div className="bg-yellow-700 h-[100vh] py-8 lg:w-[17%] md:w-[30%] hidden md:block px-4">
        <div className="flex gap-3 items-center">
          <img src="/img/person.png" alt="logo-img" className="w-10 h-10 " />
          <div>
            <p className="text-white">Adeboye Doe</p>
            <p className="text-gray-300 text-sm">@adeboye</p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 pt-6 text-white">
          <p className="px-3 py-2">Showroom</p>
          <Link className="flex gap-3 items-center bg-yellow-900 py-2 rounded-md px-3">
            <FaHome /> <span> Home</span>
          </Link>
          <Link className="py-2 rounded-md px-3 flex gap-3 items-center">
            <FaHome />
            <span>Categoriess</span>{" "}
          </Link>
        </div>
      </div>
      <div>
        <div className="shadow-lg space-x-5 py-4 w-[100%]">
          <Link>Sfotware/Application listing</Link>
          <Link>Marketplace</Link>
          <Link>Jobs</Link>
          <Link>Pitch room</Link>
        </div>
      </div>
    </div>
  );
}

export default Another;
