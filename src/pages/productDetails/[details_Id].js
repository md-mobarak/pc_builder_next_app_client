import { useRouter } from "next/router";

const ProductDetails = ({ data }) => {
  console.log(data);
  const router = useRouter();
  return (
    <div>
      <h1>id:{router?.query?.details_Id}</h1>
    </div>
  );
};

export default ProductDetails;

// Define the getServerSideProps function
export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const id = params.details_Id;
    // Fetch data from an API or any other data source
    const res = await fetch(`http://localhost:5000/product/${id}`);

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
    console.error("Error fetching data:", error);
    return {
      props: {
        data: {}, // You can provide a default value or appropriate error handling here
      },
    };
  }
}
