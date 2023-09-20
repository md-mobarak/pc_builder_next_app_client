import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable @next/next/no-img-element */
const Product = ({ product }) => {
  const router = useRouter();
  const { pathname } = router;
  const { data: session } = useSession();

  const handleDataPostInPcBuild = (data) => {
    const email = session?.user?.email;
    const newData = {
      email: email,
      image: data?.image,
      productName: data?.productName,
      category: data?.category,
      price: data?.price,
      status: data?.status,
    };
    fetch("https://builder-next-app-6-server-3.vercel.app/build", {
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
        if (responseData?.acknowledged === true) {
          toast.success("successfully done");
          router.push("/pcBuilder");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
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
