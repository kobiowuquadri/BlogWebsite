import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center py-8 md:py-0">
      <h1 className="text-blue-500 font-bold md:text-9xl text-6xl">404</h1>
      <h1 className="text-2xl mb-5">Page Not Found</h1>
      <Link
        to="/"
        className="font-semibold px-6 py-2 text-sm rounded-md tracking-wider text-white bg-black"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
