const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

console.log("🚀 THIS IS THE ACTIVE INDEX FILE");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Connect Database
connectDB();

// ✅ CORS CONFIG (IMPORTANT FOR DEPLOYMENT)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://glitchtrend.vercel.app"
    ],
    credentials: true,
  })
);

// Middlewares
app.use(express.json());

// Route Logs
console.log("✅ AUTH ROUTES LOADED");
console.log("✅ PRODUCT ROUTES LOADED");
console.log("✅ UPLOAD ROUTES LOADED");
console.log("✅ ORDER ROUTES LOADED");
console.log("✅ ADMIN ROUTES LOADED");
console.log("✅ PAYMENT ROUTES LOADED");

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payment", paymentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Glitch Trend Backend Running 🚀");
});

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});


