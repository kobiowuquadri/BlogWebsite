import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="lg:px-32 px-4  bg-gray-200 shadow-xl pt-5 pb-10 sm:grid xl:grid-cols-4 sm:grid-cols-2 justify-between gap-7">
      <div className="space-y-3 ">
        <p className="text-sm mt-7">
          At Football Heroes, we are more than just fans; we are storytellers.
          Our mission is to honor the heroes of the beautiful game by sharing
          their triumphs, struggles, and everything in between. Whether it's the
          record-breaking goal scorers, the masterful playmakers, or the unsung
          heroes behind the scenes, we are dedicated to bringing their stories
          to life
        </p>
      </div>

      <div className="space-y-3">
        <h1 className="font-semibold pt-7">Contact us</h1>
        <p className="font-semibold text-sm cursor-pointer">
          Email:
          <a href="mailto:info@gmail.com" className="font-normal ml-2">
            Send Email
          </a>
        </p>
        <p className="font-semibold text-sm cursor-pointer">
          Phone:
          <a href="tel:123-456-7890" className="font-normal ml-2">
            Call Us
          </a>
        </p>
        <Link to="/about" className="text-sm block">
          About us
        </Link>
      </div>
      <div className="space-y-3">
        <h1 className="font-semibold pt-7">Quick Link</h1>
        <Link to="/" className="text-sm block">
          Home
        </Link>

        <Link to="/log" className="text-sm block">
          Blog
        </Link>
        <Link to="/createPost" className="text-sm block">
          Create Blog
        </Link>
      </div>
      <div className=" ">
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
