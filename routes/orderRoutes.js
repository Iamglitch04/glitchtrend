const express = require("express");
const router = express.Router();

const {
  addOrderItems,
  getMyOrders,
  getOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/roleMiddleware");

// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("ORDER ROUTE WORKING");
});

// CREATE ORDER + GET ALL ORDERS (ADMIN)
router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);

// GET LOGGED IN USER ORDERS
router.get("/myorders", protect, getMyOrders);

// STEP 3 ✅ MARK ORDER AS PAID (After Razorpay payment success)
router.put("/:id/pay", protect, updateOrderToPaid);

// MARK ORDER AS DELIVERED (ADMIN)
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

// GET ORDER BY ID
router.get("/:id", protect, getOrderById);

module.exports = router;