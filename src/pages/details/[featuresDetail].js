/* eslint-disable react-hooks/rules-of-hooks */
import Product from "@/components/Home/Product";
import { useRouter } from "next/router";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const featuresDetails = ({ data }) => {
  const router = useRouter();
  let featuresName = router?.query?.featuresDetail?.toLocaleLowerCase();

  if (featuresName === "cpu") {
    featuresName = "cpu / processor";
  } else if (featuresName === "storage") {
    featuresName = "storage device";
  }
  const filterData = data?.filter(
    (c) => c?.category?.toLocaleLowerCase() === featuresName
  );

  return (
    <div className="lg:my-20 my-10">
      <h1 className="text-center font-bold text-blue-500 lg:text-4xl text-erro uppercase">
        {featuresName}
      </h1>
      <div className="p-10 rounded-lg bg-white shadow-xl w-full">
        <div className="lg:flex justify-center items-center space-x-4 space-y-8 ">
          {filterData?.map((product) => (
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
  );
};

export default featuresDetails;
// Define the getServerSideProps function
// Define the getServerSideProps function
export async function getServerSideProps() {
  try {
    // Fetch data from an API or any other data source
    const res = await fetch(
      "https://builder-next-app-6-server-3.vercel.app/product"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    // Return the data as props
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);
    return {
      props: {
        data: [], // You can provide a default value or appropriate error handling here
      },
    };
  }
}
