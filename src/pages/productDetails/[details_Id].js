/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";

const ProductDetails = ({ data }) => {
  // console.log(data?.category);
  const {
    _id,
    id,
    image,
    productName,
    category,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
  } = data;
  const router = useRouter();
  return (
    <main className="   mx-auto px-5">
      <div className="flex hover:shadow-2xl lg:my-20 items-center rounded-2xl bg-white p-10 justify-evenly space-x-5 w-full ">
        <img className="w-96" src={image} alt="" />
        <div>
          <h1 className=" text-4xl font-bold text-green-500 uppercase">
            Product Details
          </h1>
          <h2 className="font-semibold text-2xl mt-2">Name: {productName}</h2>
          <h3 className=" font-semibold text-xl mt-2">Category:{category}</h3>
          <h1 className=" font-semibold text-3xl mt-2 text-green-500">
            Price: {price}
          </h1>
          <h4 className=" font-semibold text-2xl mt-2">
            Status: <span className="text-neutral">{status}</span>
          </h4>
          <p className="mt-2 text-xl ">Description: {description}</p>
          <p className="mt-2 text-xl text-yellow-600 font-semibold">
            Rating: {individualRating}
          </p>
        </div>
      </div>
      <div className="px-10 my-10">
        <h1 className="text-center lg:my-5 text-blue-900 text-5xl font-bold uppercase">
          keyFeatures
        </h1>
        <div className="overflow-x-auto">
          <table className="table bg-white table-zebra">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Specification</th>
                <th>Port</th>
                <th>Type</th>
                <th>Resolution</th>
                <th>Voltage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{keyFeatures?.Brand}</th>
                <td>{keyFeatures?.Model}</td>
                <td>{keyFeatures?.Specification}</td>
                <td>{keyFeatures?.Port}</td>
                <td>{keyFeatures?.Type}</td>
                <td>{keyFeatures?.Resolution}</td>
                <td>{keyFeatures?.Voltage}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

// Define the getServerSideProps function
export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const id = params?.details_Id;
    // Fetch data from an API or any other data source
    const res = await fetch(
      `https://builder-next-app-6-server-3.vercel.app/product/${id}`
    );

    if (!res?.ok) {
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
    console.error("Error fetching data:", error);
    return {
      props: {
        data: {}, // You can provide a default value or appropriate error handling here
      },
    };
  }
}
