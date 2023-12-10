// const mongoose = require("mongoose");

// const CartItemSchema = mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, required: true },
//   product: { type: mongoose.Schema.Types.ObjectId, required: true },
//   quantity: { type: Number, required: true, min: 0, int: true },
// });

// const CartItem = mongoose.model("cartItems", CartItemSchema);
// module.exports = CartItem;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User", // Reference to the User model
  },
  product: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Product", // Reference to the Product model
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensure positive integer quantity
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
