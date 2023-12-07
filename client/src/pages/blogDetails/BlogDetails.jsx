const posts = [
  {
    id: 1,
    title: "Buying new player",
    sport: "Football",
    author: "Seun tope",
    date: new Date().toISOString(),
    authImg: "img/default.jpg",
    image: "/img/player1.webp",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci iure nam dolores neque ducimus repellendus numquam molestiae obcaecati tempore, incidunt molestias, explicabo fugit expedita, odio sapiente mollitia aspernatur nulla saepe amet quam. Architecto expedita nam molestiae vel saepe. Labore numquam facere at, voluptas vitae quo ad qui ex maxime atque et iste. Quasi facere consequuntur iure dolorum error quibusdam esse excepturi possimus laboriosam? Blanditiis ullam placeat obcaecati impedit consectetur dolor repudiandae, exercitationem labore similique provident necessitatibus modi doloremque, perferendis mollitia enim esse quas quis maxime voluptatibus? Sed fugiat",
  },
];

function BlogDetails() {
  return (
    <div className="md:mt-16 mt-8 mx-auto text-center">
      {posts.map((post) => (
        <div key={post.id}>
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
            <p className="text-gray-500 text-sm">{post.author}</p>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </div>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
