function CreatePost() {
  return (
    <div className="max-w-xl h-screen mx-auto flex-col justify-center flex items-center px-4">
      <h1 className="sm:text-3xl text-2xl text-center font-normal mb-7">
        Create Post
      </h1>
      <form>
        <input
          type="text"
          className="placeholder:text-sm text-gray-700 focus:outline-none border w-[100%] mb-3 border-gray-500 rounded-md px-3 py-2"
          placeholder="Post Title"
        />
        <textarea
          rows={7}
          className="placeholder:text-sm text-gray-700 focus:outline-none border w-[100%] mb-3 border-gray-500 rounded-md px-3 py-2"
          placeholder="Post Comment"
        />
        <input
          type="file"
          className="placeholder:text-sm text-gray-700 focus:outline-none border w-[100%] mb-3 border-gray-500 rounded-md px-3 py-2"
          placeholder="Post Image"
        />
        <button className="bg-blue-500 sm:text-xl text-sm text-white py-1.5 px-8 rounded-lg mt-2">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
