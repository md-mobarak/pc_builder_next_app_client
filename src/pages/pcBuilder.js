/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsFillCpuFill,
  BsFillMotherboardFill,
  BsMouse2Fill,
} from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { GrMonitor, GrStorage } from "react-icons/gr";
import { ImCloudDownload } from "react-icons/im";
import { toast } from "react-toastify";

const PcBuilder = ({ data }) => {
  const router = useRouter();
  const storage = data?.filter((s) => s?.category === "Storage Device");
  const cpu = data?.filter((c) => c?.category === "CPU / Processor");
  const monitor = data?.filter((m) => m?.category === "Monitor");
  const mouse = data?.filter((m) => m?.category === "Mouse");
  const motherboard = data?.filter((m) => m?.category === "Motherboard");
  const powerSupply = data?.filter((p) => p?.category === "Power Supply Unit");

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/build/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.text();
      })
      .then((data) => {
        if (data) {
          // router.reload();
          toast?.success("successfully deleted Product");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <section>
          {storage?.slice(0, 1)?.map((items) => {
            return (
              <div className="flex justify-around lg:space-x-8 items-center">
                <img className="w-20 h-20" src={items?.image} alt="" />
                <p>{items?.productName}</p>
                <button
                  onClick={() => deleteProduct(items._id)}
                  className="btn btn-error mx-2 text-white  rounded-xl btn-xs"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </section>
        <section>
          {storage?.length ? (
            <button className="btn btn-disabled text-white  rounded-xl btn-sm">
              Choose
            </button>
          ) : (
            <Link href={`/details/storage`}>
              <button className="btn btn-neutral  text-white  rounded-xl btn-sm">
                Choose
              </button>
            </Link>
          )}
        </section>
      </div>

      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <BsFillMotherboardFill className="w-12  text-neutral h-12"></BsFillMotherboardFill>
          <h4 className="text-xl mx-2 font-semibold text-green-500">
            Motherboard
          </h4>
        </section>
        <section>
          {motherboard?.slice(0, 1)?.map((items) => {
            return (
              <div className="flex justify-around lg:space-x-8 items-center">
                <img className="w-20 h-20" src={items?.image} alt="" />
                <p>{items?.productName}</p>
                <button
                  onClick={() => deleteProduct(items._id)}
                  className="btn btn-error mx-2 text-white  rounded-xl btn-xs"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </section>
        <section>
          {motherboard?.length ? (
            <button className="btn btn-disabled text-white  rounded-xl btn-sm">
              Choose
            </button>
          ) : (
            <Link href={`/details/Motherboard`}>
              <button className="btn btn-neutral  text-white  rounded-xl btn-sm">
                Choose
              </button>
            </Link>
          )}
        </section>
      </div>

      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <GiComputerFan className="w-12   text-neutral h-12"></GiComputerFan>
          <h4 className="text-xl mx-2 font-semibold text-green-500">
            Power supply
          </h4>
        </section>
        <section>
          {powerSupply?.slice(0, 1)?.map((items) => {
            return (
              <div className="flex justify-around lg:space-x-8 items-center">
                <img className="w-20 h-20" src={items?.image} alt="" />
                <p>{items?.productName}</p>
                <button
                  onClick={() => deleteProduct(items._id)}
                  className="btn btn-error mx-2 text-white  rounded-xl btn-xs"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </section>
        <section>
          {powerSupply?.length ? (
            <button className="btn btn-disabled text-white  rounded-xl btn-sm">
              Choose
            </button>
          ) : (
            <Link href={`/details/Power supply unit`}>
              <button className="btn btn-neutral  text-white  rounded-xl btn-sm">
                Choose
              </button>
            </Link>
          )}
        </section>
      </div>
      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <BsFillCpuFill className="w-12 text-neutral  h-12"></BsFillCpuFill>
          <h4 className="text-xl mx-2 font-semibold text-green-500">
            CPU/Processor
          </h4>
        </section>
        <section>
          {cpu?.slice(0, 1)?.map((items) => {
            return (
              <div className="flex justify-around lg:space-x-8 items-center">
                <img className="w-20 h-20" src={items?.image} alt="" />
                <p>{items?.productName}</p>
                <button
                  onClick={() => deleteProduct(items._id)}
                  className="btn btn-error mx-2 text-white  rounded-xl btn-xs"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </section>
        <section>
          {cpu?.length ? (
            <button className="btn btn-disabled text-white  rounded-xl btn-sm">
              Choose
            </button>
          ) : (
            <Link href={`/details/CPU`}>
              <button className="btn btn-neutral  text-white  rounded-xl btn-sm">
                Choose
              </button>
            </Link>
          )}
        </section>
      </div>
      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <GrMonitor className="w-12 text-neutral  h-12"></GrMonitor>
          <h4 className="text-xl mx-2 font-semibold text-green-500">Monitor</h4>
        </section>
        <section>
          {monitor?.slice(0, 1)?.map((items) => {
            return (
              <div className="flex justify-around lg:space-x-8 items-center">
                <img className="w-20 h-20" src={items?.image} alt="" />
                <p>{items?.productName}</p>
                <button
                  onClick={() => deleteProduct(items._id)}
                  className="btn btn-error mx-2 text-white  rounded-xl btn-xs"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </section>
        <section>
          {monitor?.length ? (
            <button className="btn btn-disabled text-white  rounded-xl btn-sm">
              Choose
            </button>
          ) : (
            <Link href={`/details/Monitor`}>
              <button className="btn btn-neutral  text-white  rounded-xl btn-sm">
                Choose
              </button>
            </Link>
          )}
        </section>
      </div>
      <div className="mt-5 flex justify-around items-center border border-neutral shadow-xl rounded-xl p-5">
        <section className="flex justify-center items-center">
          <BsMouse2Fill className="w-12  h-12"></BsMouse2Fill>
          <h4 className="text-xl mx-2 font-semibold text-green-500">Mouse</h4>
        </section>
        <section>
          {mouse?.slice(0, 1)?.map((items) => {
            return (
              <div className="flex justify-around lg:space-x-8 items-center">
                <img className="w-20 h-20" src={items?.image} alt="" />
                <p>{items?.productName}</p>
                <button
                  onClick={() => deleteProduct(items._id)}
                  className="btn btn-error mx-2 text-white  rounded-xl btn-xs"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </section>
        <section>
          {mouse?.length ? (
            <button className="btn btn-disabled text-white  rounded-xl btn-sm">
              Choose
            </button>
          ) : (
            <Link href={`/details/Mouse`}>
              <button className="btn btn-neutral  text-white  rounded-xl btn-sm">
                Choose
              </button>
            </Link>
          )}
        </section>
      </div>
      <div className="flex justify-center my-3">
        <button
          className={`btn  ${
            motherboard?.length &&
            cpu?.length &&
            monitor?.length &&
            mouse?.length &&
            storage?.length &&
            powerSupply?.length
              ? "btn-neutral"
              : "btn-disabled"
          }  w-4/12 text-white text-xl rounded-2xl`}
        >
          BUILD PC
        </button>
      </div>
    </main>
  );
};

export default PcBuilder;

export async function getServerSideProps(context) {
  try {
    // Get the user's session using getSession
    const session = await getSession(context);
    // Check if the user is authenticated
    if (!session?.user?.email) {
      throw new Error("User is not authenticated");
    }
    const email = session?.user?.email;
    // Fetch data from an API or database based on the user's email
    const response = await fetch(
      `http://localhost:5000/build-product/${email}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    // console.log(data);

    // Return the data as props
    return {
      props: {
        data,
      },
      // revalidet:60
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    // You can handle errors and return an appropriate error page or message
    return {
      props: {
        data: null,
        error: "Failed to fetch data",
      },
    };
  }
}
