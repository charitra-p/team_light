import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:4000/api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleBuyNow = async (productId) => {
    const response = await axios.post(
      `http://localhost:4000/api/razorpay/${productId}`
    );
    const options = {
      key: response.data.key_id,
      amount: response.data.amount,
      currency: "INR",
      name: "TeamLite Products",
      description: "Test Transaction",
      order_id: response.data.order_id,
      handler: (response) => {
        alert(`Payment Successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Test User",
        email: "testuser@example.com",
        contact: "9999999999",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onBuyNow={handleBuyNow}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
