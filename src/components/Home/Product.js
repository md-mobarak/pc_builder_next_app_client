import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable @next/next/no-img-element */
const Product = ({ product }) => {
  const router = useRouter();
  const { pathname } = router;

  const handleDataPostInPcBuild = (data) => {
    const email = "hello@gmail.com";
    const newData = {
      email: email,
      ...data,
    };
    fetch("http://localhost:5000/build", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((responseData) => {
        // console.log(responseData);
        toast.success("successfully done");
        // If the POST request was successful, navigate to "/pcBuilder"
        router.push("/pcBuilder");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error, e.g., show a user-friendly error message
      });
  };
  const handleNavigate = (product) => {
    router.push(`/productDetails/${product?._id}`);
  };

  return (
    <>
      <div className="product-card bg-white shadow-xl  w-96 h-80 hover:shadow-2xl">
        <img
          className="product-image"
          src={product?.image}
          alt="Product Image"
        />
        <div className="product-details">
          <div className="product-name">Name: {product?.productName}</div>
          <div className="product-category">Category:{product?.category}</div>
          <div className="product-price">Price: {product?.price}</div>
          <div className="product-status">Status: {product?.status}</div>
          <div className="product-rating">Rating: ⭐⭐⭐⭐⭐</div>
          {pathname === "/" ? (
            <button
              onClick={() => handleNavigate(product)}
              className="btn btn-accent mt-4 text-white btn-xs"
            >
              Details
            </button>
          ) : (
            <div className="flex justify-around items-center space-x-4">
              <button
                onClick={() => handleDataPostInPcBuild(product)}
                className="btn btn-error mt-4 text-white btn-xs"
              >
                ADD TO PC
              </button>
              <button
                onClick={() => handleNavigate(product)}
                className="btn btn-accent mt-4 text-white btn-xs"
              >
                Details
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
