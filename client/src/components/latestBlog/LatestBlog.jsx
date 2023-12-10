import { Link } from "react-router-dom";
import posts from "../../data";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function LatestBlog({ children }) {
  return (
    <div className=" mt-10 md:px-32 px-4">
      <h1 className="text-semibold text-xl sm:text-3xl text-black">
        {children}
      </h1>

      <div
        className="md:mt-16 mt-8 grid sm:grid-cols-2 justify-between lg:grid-cols-3 grid-rows-1 gap-10 items-center "
        data-aos="fade-up"
        data-aos-duration="5000"
      >
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`/blogDetails/${post.id}`}>
              <img
                src={post.image}
                alt={post.title}
                className="sm:w-[350px] sm:h-[250px]"
              />
              <i className="bg-black tracking-widest mt-2 inline-block text-sm text-white px-4">
                {post.sport}
              </i>
              <p className="mt-2 text-xl sm:text-xl font-bold">{post.title}</p>
              <div className="my-3 flex gap-4 items-center">
                <img
                  src={post.authImg}
                  alt={post.title}
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-gray-500 text-sm">{post.author}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlog;
