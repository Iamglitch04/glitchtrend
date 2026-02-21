const express = require("express");
const router = express.Router();

console.log("AUTH ROUTES LOADED");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/roleMiddleware");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Profile
router.get("/profile", protect, getProfile);

// Admin Route
router.get("/admin", protect, admin, (req, res) => {
  res.json({
    message: "Welcome Admin 👑",
    user: req.user,
  });
});

module.exports = router;
