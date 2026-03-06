const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    console.log("Amount received:", amount);
    console.log("Key ID:", process.env.RAZORPAY_KEY_ID);

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (error) {
    console.log("RAZORPAY ERROR:", error);
    res.status(500).json({ message: "Payment order failed" });
  }
});

module.exports = router;