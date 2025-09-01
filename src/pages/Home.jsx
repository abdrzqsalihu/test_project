import Button from "../components/Button";
import { cakeData, heroContent } from "../constants/recipes";

const Home = () => {
  const cars = ["Ford", "BMW", "Audi", "Mercedes"];

  return (
    <div className="max-w-[1300px] mx-auto mt-10 px-5 md:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {cakeData.map((data) => (
          <div
            key={data.id}
            className="shadow-md hover:shadow-xl hover:shadow-orange-200 hover:cursor-pointer transition"
          >
            <div className="max-h-[300px]">
              <img
                src={data.image}
                className="w-[500px] h-[300px] object-cover"
                alt=""
              />
            </div>

            <div className="p-6">
              <h1 className="text-[#E65100] !font-bold text-[23px] font-custom">
                {data.name}
              </h1>
              <p className="text-gray-600 text-sm mt-1">{data.desc}</p>
            </div>

            <div className="border-t border-gray-200 flex gap-6 p-4 px-6">
              <a href="" className="text-orange-400 uppercase">
                Ingredients
              </a>
              <a href={data.id} className="text-orange-400 uppercase">
                Bake Now
              </a>
            </div>
          </div>
        ))}
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
      <h1>My Cars</h1>
      <div className="grid grid-cols-4">
        {cars.map((car, index) => (
          <div key={index} className="text-3xl text-green-800">
            {car}
          </div>
        ))}
      </div>
      <div>{heroContent.name}</div>
      <p>{heroContent.content}</p>

      <Button variant="primary" size="md">
        Primary button
      </Button>
      <Button variant="secondary" size="sm">
        Secondary button
      </Button>
      <Button variant="danger" size="lg">
        Danger button
      </Button>
    </div>
  );
};

export default Home;
