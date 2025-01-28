import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js"; // Ensure file extensions are included

// Configure dotenv
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Port configuration
const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI_PRODUCT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Database connection error:", err));

// Routes
app.use("/api/products", productRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
