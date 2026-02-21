const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

console.log("🚀 THIS IS THE ACTIVE INDEX FILE");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes"); // ✅ ADDED

console.log("TYPE OF ORDER ROUTES:", typeof orderRoutes);

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

console.log("✅ AUTH ROUTES LOADED");
console.log("✅ PRODUCT ROUTES LOADED");
console.log("✅ UPLOAD ROUTES LOADED");
console.log("✅ ORDER ROUTES LOADED");
console.log("✅ ADMIN ROUTES LOADED"); // ✅ ADDED

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes); // ✅ ADDED

app.get("/", (req, res) => {
  res.send("Glitch Trend Backend Running 🚀");
});

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// 404 Handler
app.use(notFound);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});