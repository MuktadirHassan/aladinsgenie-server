const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.post("/add-product", async (req, res) => {
  try {
    const exists = await Product.find({ title: req.body.title });
    if (exists[0]) {
      res.json({ message: "Product alreay exists" }).status(200);
    } else {
      const productData = Product(req.body);
      await productData.save();
      res.json({ message: "Product added successfully" }).status(200);
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "Failed to add product" }).status(200);
  }
});

module.exports = router;
