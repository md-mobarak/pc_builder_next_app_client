import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Product = ({ product }) => {
  return (
    <>
      <Link href={`/productDetails/${product._id}`}>
        <div className="product-card bg-white shadow-xl hover:shadow-2xl">
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
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
