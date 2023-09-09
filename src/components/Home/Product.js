import Link from "next/link";
import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
const Product = ({ product }) => {
  const router = useRouter();
  const { pathname } = router;
  // console.log(pathname);
  return (
    <>
      <Link href={`/productDetails/${product._id}`}>
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
            <button className="btn btn-error mt-4 text-white">ADD TO PC</button>
            {/* {!pathname === "/" ? (
              <button className="btn btn-primary">ADD TO PC</button>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
