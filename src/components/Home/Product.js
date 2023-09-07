import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Product = ({ product }) => {
  return (
    <>
      <Link href={`/productDetails/${product._id}`}>
        <div class="product-card bg-white shadow-xl hover:shadow-2xl">
          <img class="product-image" src={product?.image} alt="Product Image" />
          <div class="product-details">
            <div class="product-name">Name: {product?.productName}</div>
            <div class="product-category">Category:{product?.category}</div>
            <div class="product-price">Price: {product?.price}</div>
            <div class="product-status">Status: {product?.status}</div>
            <div class="product-rating">Rating: ⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
