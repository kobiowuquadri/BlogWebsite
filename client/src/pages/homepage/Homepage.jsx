import { Link } from "react-router-dom";
import LatestBlog from "../../components/latestBlog/LatestBlog";
import Footer from "../../components/footer/Footer";

function Homepage() {
  return (
    <>
      <div className="banner">
        <div className="innber-banner">
          <h1 className="text-white text-3xl sm:text-6xl font-semibold tracking-wides t">
            Football Blog Site
          </h1>
          <p className="text-white mt-5 sm:mt-10 sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quaerat suscipit itaque quibusdam dolorum veniam ipsum, voluptatem
            unde exercitationem sed!
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
