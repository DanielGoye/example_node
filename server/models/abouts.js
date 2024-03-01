const mongoose = require("mongoose");

const aboutsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

const About = mongoose.model("about", aboutsSchema);

module.exports = { About };
