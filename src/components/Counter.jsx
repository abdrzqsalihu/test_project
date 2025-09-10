import { useCount } from "../context/CountContext";

function Counter() {
  const { count, setCount } = useCount();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Add 1
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Subtract 1
      </button>
    </div>
  );
}

export default Counter;
