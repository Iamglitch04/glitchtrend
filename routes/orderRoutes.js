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

router.get("/test", (req, res) => {
  res.send("ORDER ROUTE WORKING");
});

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);

router.get("/myorders", protect, getMyOrders);

// 🔥 SPECIFIC ROUTES FIRST
router.put("/:id/pay", protect, updateOrderToPaid);
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

// 🔥 GENERIC ROUTE LAST
router.get("/:id", protect, getOrderById);

module.exports = router;