const mongoose = require("mongoose");

const experiencesSchema = new mongoose.Schema({
  year: { type: String, required: true, unique: true },
  works: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "workExperience",
    },
  ],
});

const Experience = mongoose.model("experience", experiencesSchema);

module.exports = { Experience };
