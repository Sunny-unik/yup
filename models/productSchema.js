const { default: mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  foodname: {
    type: String,
    minLength: [4, "Name is too short!"],
    maxLength: 37,
    required: true,
  },
  category: {
    type: String,
    lowercase: true,
    minLength: 3,
    maxLength: 37,
    required: true,
  },
  info: { type: String, minLength: 4, maxLength: 37, required: true },
  price: { type: Number, min: 40, required: true },
  created: { type: Date, default: Date.now(), required: false },
});

module.exports = mongoose.model("foods", productSchema);
