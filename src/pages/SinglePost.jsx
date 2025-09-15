import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(id);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setPost(data);
        setLoading(false);
      })
    );
  }, [id]);

  if (loading) {
    return (
      <div className="px-10 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!post.id) {
    return <NotFound />;
  }

  //   if (Object.keys(post).length === 0) {
  //     return <NotFound />;
  //   }

  return (
    <div className="mt-24">
      <h1 className="text-3xl font-bold underline text-center mt-16 my-4">
        {post.title}
      </h1>
      <div>
        <div className="bg-slate-200 p-5">
          {/* <h1 className="text-2xl font-bold underline">{post.title}</h1> */}
          <p className="text-lg">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
