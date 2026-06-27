const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  status: { type: String, default: "Pending" },
  userId: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = { OrdersSchema };