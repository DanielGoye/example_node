const mongoose = require("mongoose");

const workExperienceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  desc: { type: String, required: true },
});

const WorkExperience = mongoose.model("workExperience", workExperienceSchema);

module.exports = { WorkExperience };
