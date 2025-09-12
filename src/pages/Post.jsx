import { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/").then((res) =>
      res.json().then((data) => {
        setPosts(data);
        setLoading(false);
      })
    );
  }, []);
  //   console.log(posts);

  if (loading) {
    return (
      <div className="px-10 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="mt-20 px-10">
      <h1 className="text-3xl font-bold underline text-center mt-16 my-10">
        Post
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-10">
          {posts.slice(0, 9).map((post) => (
            <div key={post.id} className="bg-slate-200 p-5">
              <h1 className="text-2xl font-bold underline">{post.title}</h1>
              <p className="text-lg">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
