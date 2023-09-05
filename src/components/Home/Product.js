/* eslint-disable @next/next/no-img-element */
const Product = () => {
  return (
    <>
      <div class="product-card">
        <img
          class="product-image"
          src="https://www.cloud.ryanscomputers.com/cdn/products/small/hp-15s-fq3234tu-intel-cdc-n4500-156-inch-fhd-11649860891.webp"
          alt="Product Image"
        />
        <div class="product-details">
          <div class="product-name">Name: Product Name</div>
          <div class="product-category">Category: Category</div>
          <div class="product-price">Price: $99.99</div>
          <div class="product-status">Status: In Stock</div>
          <div class="product-rating">Rating: ⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      {/* <div class="product-card bg-white hover:bg-green-600 hover:text-white">
        <img
          class="product-image"
          src="https://www.cloud.ryanscomputers.com/cdn/products/small/hp-15s-fq3234tu-intel-cdc-n4500-156-inch-fhd-11649860891.webp"
          alt="Product Image"
        />
        <div class="product-details">
          <div class="product-name">Name:Product Name</div>
          <div class="product-category">Categore: Category</div>
          <div class="product-price">Price: $99.99</div>
          <div class="product-status">Status: In Stock</div>
          <div class="product-rating">Rating:⭐⭐⭐⭐⭐</div>
        </div>
      </div> */}
      {/* <div className="card w-96 shadow-xl image-full">
      <figure>
        <img
          src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p1_c084b79e-4c5b-4790-a7fe-00b1eb18b040_large.jpg?v=1674275324"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
            </div> */}
    </>
  );
};

export default Product;
