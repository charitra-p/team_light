import React from "react";

const ProductCard = ({ product, onBuyNow }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold mt-2">₹{product.price}</p>
      <button
        onClick={() => onBuyNow(product._id)}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
