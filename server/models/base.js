const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  image_url: { type: String, required: true },
  percentage: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: false },
  expiration_date: { type: Boolean, default: false },
  expired: { type: Boolean, default: false },
  tags: [String]
});
