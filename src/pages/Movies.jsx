import React, { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://${
            import.meta.env.VITE_RAPID_API_HOST
          }/list_movies.json?limit=24&page=${page}&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
              "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setMovies(data.data?.movies || []);
        setTotalPages(Math.ceil(data.data?.movie_count / 24));
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  if (loading) {
    return (
      <div className="px-10 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-10 flex justify-center items-center h-screen">
        <p className="text-red-500">Error fetching movies: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="mt-24 px-8">
      <h1 className="text-center tracking-wider font-bold font-mono text-2xl">
        Latest Movies
      </h1>

      <div className="grid grid-cols-6 gap-10 mt-10">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={movie.medium_cover_image}
              alt={movie.title}
              className="w-full h-96 object-cover rounded-xl"
            />
            <h1 className="text-lg mt-2 font-bold text-gray-800">
              {movie.title}
            </h1>
          </div>
        ))}
      </div>

      <ul className="flex justify-center gap-3 text-gray-900 py-10">
        <li>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
            className="grid size-8 place-content-center rounded border border-gray-200 hover:bg-gray-50 cursor-pointer"
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        <li className="text-sm/8 font-medium tracking-widest">
          {`${page} / ${totalPages}`}
        </li>

        <li>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
            className="grid size-8 place-content-center rounded border border-gray-200 hover:bg-gray-50 cursor-pointer"
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Movies;
