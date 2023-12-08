import postss from "../../data";

import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function BlogDetails() {
  const { id: postId } = useParams();

  const post = postss.find((p) => p.id == postId);
  console.log(postss);
  console.log(post);
  return (
    <>
      <div className="md:mt-16 mt-8 max-w-3xl sm:mx-auto pb-16 mx-4">
        <Link
          to="/"
          className="bg-black text-white font-semibold text-sm sm:text-lg py-2 px-6 rounded-lg"
        >
          Go Back
        </Link>
        <div key={post.id} className="mt-10">
          <img
            src={post.image}
            alt={post.title}
            className="sm:w-[700px] sm:h-[400px] ma-auto  block"
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
            <p className="text-gray-500 sm:text-sm text-xs">{post.author}</p>
            <p className="text-gray-500 sm:text-sm text-xs">{post.date}</p>
          </div>
          <p className="text-sm mt-5">{post.content}</p>
        </div>
        <form className="mt-10">
          <textarea
            placeholder="write comment"
            rows={5}
            className="w-[100%] focus:outline-none border border-gray-500 rounded-lg py-2 px-4 "
          />
          <button className="text-white bg-blue-500 py-2 px-6 sm:font-semibold text-sm sm:text-lg rounded-lg mt-3">
            Comment
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BlogDetails;
