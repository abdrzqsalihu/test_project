const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-10 px-5 md:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="shadow-md hover:shadow-xl hover:shadow-gray-300 hover:cursor-pointer transition">
          <div className="max-h-[300px]">
            <img
              src="src/assets/images/soup.jpg"
              className="w-[500px] h-[300px] object-cover"
              alt=""
            />
          </div>

          <div className="p-6">
            <h1 className="text-[#E65100] font-bold text-[23px]">
              Sponge Cake
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Give thanks to the most high.The weather is amazing.
            </p>
          </div>

          <div className="border-t border-gray-200 flex gap-6 p-4 px-6">
            <a href="" className="text-orange-400 uppercase">
              Ingredients
            </a>
            <a href="" className="text-orange-400 uppercase">
              Bake Now
            </a>
          </div>
        </div>
        <div className="shadow-md hover:shadow-xl hover:shadow-gray-300 hover:cursor-pointer transition">
          <img
            src="src/assets/images/big_soup.webp"
            className="w-[500px] h-[300px] object-cover"
            alt=""
          />

          <div className="p-6">
            <h1 className="text-[#E65100] font-bold text-[23px]">
              Sponge Cake
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Give thanks to the most high.The weather is amazing.
            </p>
          </div>

          <div className="border-t border-gray-200 flex gap-6 p-4 px-6">
            <a href="" className="text-orange-400 uppercase">
              Ingredients
            </a>
            <a href="" className="text-orange-400 uppercase">
              Bake Now
            </a>
          </div>
        </div>
        <div className="shadow-md hover:shadow-xl hover:shadow-gray-300 hover:cursor-pointer transition">
          <img
            src="src/assets/images/cake_fruit.jpg"
            className="w-[500px] h-[300px] object-cover object-left"
            alt=""
          />

          <div className="p-6">
            <h1 className="text-[#E65100] font-bold text-[23px]">
              Sponge Cake
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Give thanks to the most high.The weather is amazing.
            </p>
          </div>

          <div className="border-t border-gray-200 flex gap-6 p-4 px-6">
            <a href="" className="text-orange-400 uppercase">
              Ingredients
            </a>
            <a href="" className="text-orange-400 uppercase">
              Bake Now
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
        <div className="md:col-span-2 md:row-span-2 bg-red-300 rounded-lg text-white p-6">
          1
        </div>
        <div className="bg-red-300 rounded-lg md:row-span-2 text-white p-6">
          2
        </div>
        <div className="bg-red-300 rounded-lg text-white p-6">3</div>
        <div className="bg-red-300 rounded-lg text-white p-6">4</div>
      </div>
    </div>
  );
};

export default Home;
