const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  imageURL: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  feedback: { type: String, required: true },
});

const Testimonial = mongoose.model("testimonials", testimonialSchema);

module.exports = { Testimonial };
