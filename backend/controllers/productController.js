import Product from "../models/productModel.js";
import Razorpay from "razorpay";

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Fetch all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};

// Create an order with Razorpay
export const createOrder = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const options = {
      amount: product.price * 100, // Convert price to paise
      currency: "INR",
      receipt: `receipt_${productId}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(201).json({
      key_id: process.env.RAZORPAY_KEY_ID,
      amount: order.amount,
      order_id: order.id,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to create order", error: err.message });
  }
};
