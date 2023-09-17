import Home from "@/components/Home/Home";
import { useEffect } from "react";

const Index = ({ data }) => {
  useEffect(()=>{
data
  },[data])
  return <main>
    <Home data={data}></Home>
    </main>;
};

export default Index;
// Define the getServerSideProps function
export async function getStaticProps() {
  try {
    // Fetch data from an API or any other data source
    const res = await fetch("http://localhost:5000/product");
    if (!res?.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res?.json();
    // Return the data as props
    return {
      props: {
        data,
      },
      revalidate: 10,
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
