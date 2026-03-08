const express = require("express");
const router = express.Router();

// TEMP products array (until database is used)
let products = [];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// POST add product
router.post("/", (req, res) => {
  const { name, price, description, image } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price required" });
  }

  const newProduct = {
    id: Date.now(),
    name,
    price,
    description,
    image,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

module.exports = router;


