const mongoose = require("mongoose");

const brandsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

const Brand = mongoose.model("brand", brandsSchema);

module.exports = { Brand };
