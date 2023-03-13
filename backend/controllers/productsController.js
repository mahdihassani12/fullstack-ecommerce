const { validationResult } = require("express-validator");
const Product = require("../models/Product");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
};

exports.postStoreProducts = async (req, res, next) => {
  const { name, description, category, price, brand, quantity } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const newProduct = new Product({
        userId: req.user.id,
        name,
        description,
        category,
        price,
        brand,
        quantity,
      });
      const product = await newProduct.save();
      res.json({ product });
    }
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ msg: "Product was not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
};
