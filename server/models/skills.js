const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bgColor: { type: String, required: true },
  icon: { type: String, required: true },
});

const Skill = mongoose.model("skill", skillsSchema);

module.exports = { Skill };
