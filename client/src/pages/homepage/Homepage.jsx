import { Link } from "react-router-dom";
import LatestBlog from "../../components/latestBlog/LatestBlog";
import Footer from "../../components/footer/Footer";

import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Homepage() {
  return (
    <>
      <div className="banner">
        <div className="innber-banner">
          <h1
            className="text-white text-2xl sm:text-6xl font-semibold tracking-wider"
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            Welcome to our Football Heroes Blog!
          </h1>

          <p
            className="text-white mt-8 sm:mt-14 sm:text-2xl"
            data-aos="fade-right"
            data-aos-duration="4000"
          >
            Discover the extraordinary tales of football lengends who have left
            an indelible mark on the sport. From the iconic moments that define
            their careers to the personal journeys that shaped them, we bring
            you the untold stories of the heroes who have graced the pitch.
          </p>

          <Link
            to="/createPost"
            className="sm:py-3 inline-block text-lg tracking-wider sm:text-xl py-1.5 mt-10 hover:text-gray-100 transition-all duration-300 hover:bg-blue-900 rounded-md px-6 sm:px-8 font-semibold bg-blue-800 text-white"
          >
            Create Post
          </Link>
        </div>
      </div>
      <div className="space-y-20">
        <LatestBlog>Latest Post</LatestBlog>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
