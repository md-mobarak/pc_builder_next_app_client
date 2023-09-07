/* eslint-disable react/jsx-key */
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Banner from "./Banner";
import Product from "./Product";

const Home = ({ data }) => {
  // Shuffle the data array
  const shuffledData = data.sort(() => Math.random() - 0.5);

  // Take the first 6 elements from the shuffled array
  const randomProducts = shuffledData.slice(0, 6);

  return (
    <div>
      <Banner></Banner>
      <div className=" lg:px-20 font-serif lg:my-20 my-5 ">
        <h1 className="text-center text-5xl font-bold text-neutral my-4">
          OUR PRODUCT
        </h1>
        <div className="border border-green-400 p-10 rounded-lg bg-white shadow-xl">
          <div className="grid lg:grid-cols-3 space-x-4 space-y-8 mx-auto ">
            {randomProducts.map((product) => (
              <Product key={product?._id} product={product}></Product>
            ))}
          </div>
          <div className="flex justify-end mt-5">
            <button className="flex items-center text-xl justify-center">
              More Product
              <BsFillArrowRightCircleFill className="mx-3 text-green-500 w-8 h-8"></BsFillArrowRightCircleFill>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
