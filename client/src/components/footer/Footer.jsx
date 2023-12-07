import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="md:px-32 px-4  bg-gray-200 shadow-xl pt-5 pb-10 sm:flex justify-between ">
      <div className="space-y-3 sm:w-[35%]">
        <h1 className="font-semibold pt-7">About</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Sem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Ipsum, maiores, dolor sit amet, consectetur adipisicing elit.
        </p>
        <p className="font-semibold text-sm">
          Email: <span className="font-normal"> info@gmail.com</span>
        </p>
        <p className="font-semibold text-sm">
          Phone:
          <span className="font-normal"> 90 445 784 3898</span>
        </p>
      </div>
      <div className="space-y-3 sm:w-[35%]">
        <h1 className="font-semibold pt-7">Quick Link</h1>
        <Link to="/" className="text-sm block">
          Home
        </Link>
        <Link to="/about" className="text-sm block">
          About
        </Link>
        <Link to="/log" className="text-sm block">
          Blog
        </Link>
        <Link to="/log" className="text-sm block">
          Create Blog
        </Link>
      </div>
      <div className="bg-white px-8 md:px-14 pb-7 mt-5 sm:w-[35%]">
        <h1 className="font-semibold pt-7">Weekly Newsletter</h1>
        <p className="text-sm">Get Blog article and offers via email</p>
        <form className="mt-5 flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your Email"
            className="px-3 placeholder:text-sm py-1.5 border rounded-lg border-gray-600 focus:outline-none"
          />
          <button className="bg-blue-500 py-1.5 rounded-lg text-white  tracking-widestfont-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
