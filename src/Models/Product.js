const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0, int: true },
  category: { type: String, required: true },
  imageURL: { type: String },
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
