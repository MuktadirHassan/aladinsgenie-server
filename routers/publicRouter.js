const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log(err);
    res
      .json({ message: "Something went wrong while getting products" })
      .status(400);
  }
});

module.exports = router;
