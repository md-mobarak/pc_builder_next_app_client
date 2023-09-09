import Link from "next/link";
import {
    BsFillCpuFill,
    BsFillMotherboardFill,
    BsMouse2Fill,
} from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { GrMonitor, GrStorage } from "react-icons/gr";

const Features = () => {
 

  return (
    <div className=" font-serif py-20">
      <h1 className="text-center font-bold text-3xl">Featured Category</h1>
      <p className="text-center my-2">
        Get Your Desired Product from Featured Category!
      </p>
      <div className="lg:flex justify-around items-center my-5 px-10">
        <Link href={`/details/storage`}>
          <div className="px-10 py-7 cursor-pointer text-center bg-white  shadow-2xl rounded-xl border hover:border-green-500">
            <div className="flex justify-center">
              <GrStorage className="w-12  h-12"></GrStorage>
            </div>
            <h4 className="my-2 text-xl font-semibold text-green-500">
              Storage
            </h4>
          </div>
        </Link>
        <Link href={`/details/motherboard`}>
          <div className="px-10 py-7 cursor-pointer text-center bg-white  shadow-2xl rounded-xl border hover:border-green-500">
            <div className="flex justify-center">
              <BsFillMotherboardFill className="w-12  h-12"></BsFillMotherboardFill>
            </div>

            <h4 className="my-2 text-xl font-semibold text-green-500">
              Motherboard
            </h4>
          </div>
        </Link>
        <Link href={`/details/Power supply unit`}>
          <div className="px-10 py-7 cursor-pointer text-center bg-white  shadow-2xl rounded-xl border hover:border-green-500">
            <div className="flex justify-center">
              <GiComputerFan className="w-12  h-12"></GiComputerFan>
            </div>
            <h4 className="my-2 text-xl font-semibold text-green-500">
              Power supply
            </h4>
          </div>
        </Link>
        <Link href={`/details/CPU`}>
          <div className="px-10 py-7 border hover:border-green-500 cursor-pointer text-center bg-white   shadow-2xl rounded-xl">
            <div className="flex justify-center">
              <BsFillCpuFill className="w-12  h-12"></BsFillCpuFill>
            </div>
            <h4 className="my-2 text-xl font-semibold text-green-500">
              CPU/Processor
            </h4>
          </div>
        </Link>
        <Link href={`/details/Monitor`}>
          <div className="px-10 py-7 border hover:border-green-500  cursor-pointer text-center bg-white   shadow-2xl rounded-xl">
            <div className="flex justify-center">
              <GrMonitor className="w-12  h-12"></GrMonitor>
            </div>
            <h4 className="my-2 text-xl font-semibold text-green-500">
              Monitor
            </h4>
          </div>
        </Link>
        <Link href={`/details/Mouse`}>
          <div className="px-10 py-7 border hover:border-green-500 cursor-pointer text-center bg-white   shadow-2xl rounded-xl">
            <div className="flex justify-center">
              <BsMouse2Fill className="w-12  h-12"></BsMouse2Fill>
            </div>
            <h4 className="my-2 text-xl font-semibold text-green-500">Mouse</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Features;
