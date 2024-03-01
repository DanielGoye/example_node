const mongoose = require("mongoose");

const worksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  projectLink: { type: String, required: true },
  codeLink: { type: String, required: true },
  imgURL: { type: String, required: true },
  private: {type: Boolean, default: true},
  tags: [{ tag: String }],
});

const Work = mongoose.model("work", worksSchema);

module.exports = { Work };
