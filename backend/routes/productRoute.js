import express from "express";
import { getProducts, createOrder } from "../controllers/productController.js"; // Include file extension

const router = express.Router();

// Define routes
router.get("/", getProducts); // Fetch all products
router.post("/razorpay/:productId", createOrder); // Create Razorpay order

export default router;
