import Link from "next/link";
import {
  BsFillCpuFill,
  BsFillMotherboardFill,
  BsMouse2Fill,
} from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { GrMonitor, GrStorage } from "react-icons/gr";
import { ImCloudDownload } from "react-icons/im";

const PcBuilder = () => {
  return (
    <main className="lg:px-20 px-10 lg:my-10">
      <div className=" flex items-center shadow-xl rounded-2xl justify-around my-10 p-10">
        <h2 className="text-green-500 text-xl shadow-xl  font-bold border p-3">
          Total Tk 12000
        </h2>
        <div>
          <h1 className="text-neutral lg:text-3xl  text-xl font-bold uppercase">
            PC Builder
          </h1>
          <small className="text-center">Select Your Components</small>
        </div>
        <button>
          <ImCloudDownload className="text-green-500 w-8 h-8"></ImCloudDownload>
        </button>
      </div>
      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <GrStorage className="w-12  text-neutral  h-12"></GrStorage>
          <h4 className="text-xl mx-2 font-semibold text-green-500">Storage</h4>
        </section>
        <section></section>
        <section>
          <Link href={`/details/storage`}>
            <button className="btn btn-neutral  text-white  rounded-xl btn-sm">
              Choose
            </button>
          </Link>
        </section>
      </div>

      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <BsFillMotherboardFill className="w-12  text-neutral h-12"></BsFillMotherboardFill>
          <h4 className="text-xl mx-2 font-semibold text-green-500">
            Motherboard
          </h4>
        </section>
        <section></section>
        <section>
          <Link href={`/details/motherboard`}>
            <button className="btn btn-neutral text-white  rounded-xl btn-sm">
              Choose
            </button>
          </Link>
        </section>
      </div>

      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <GiComputerFan className="w-12   text-neutral h-12"></GiComputerFan>
          <h4 className="text-xl mx-2 font-semibold text-green-500">
            Power supply
          </h4>
        </section>
        <section></section>
        <section>
          <Link href={`/details/Power supply unit`}>
            <button className="btn btn-neutral  text-white rounded-xl btn-sm">
              Choose
            </button>
          </Link>
        </section>
      </div>
      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <BsFillCpuFill className="w-12 text-neutral  h-12"></BsFillCpuFill>
          <h4 className="text-xl mx-2 font-semibold text-green-500">
            CPU/Processor
          </h4>
        </section>
        <section></section>
        <section>
          <Link href={`/details/CPU`}>
            <button className="btn btn-neutral  text-white rounded-xl btn-sm">
              Choose
            </button>
          </Link>
        </section>
      </div>
      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <GrMonitor className="w-12 text-neutral  h-12"></GrMonitor>
          <h4 className="text-xl mx-2 font-semibold text-green-500">Monitor</h4>
        </section>
        <section></section>
        <section>
          <Link href={`/details/Monitor`}>
            <button className="btn btn-neutral  text-white rounded-xl btn-sm">
              Choose
            </button>
          </Link>
        </section>
      </div>
      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <BsMouse2Fill className="w-12  h-12"></BsMouse2Fill>
          <h4 className="text-xl mx-2 font-semibold text-green-500">Mouse</h4>
        </section>
        <section></section>
        <section>
          <Link href={`/details/Mouse`}>
            <button className="btn btn-neutral  text-white rounded-xl btn-sm">
              Choose
            </button>
          </Link>
        </section>
      </div>
      <div className="flex justify-center my-3">
        <button className=" btn btn-neutral w-4/12 text-white text-xl rounded-2xl">
          BUILD PC
        </button>
      </div>
    </main>
  );
};

export default PcBuilder;

export async function getServerSideProps(context) {
  // Fetch data from an API or database
  const data = await fetch(); // Replace with your data fetching logic

  // Return the data as props
  return {
    props: {
      data,
    },
  };
}
