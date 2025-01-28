import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

// Export the Product model
export default Product;
