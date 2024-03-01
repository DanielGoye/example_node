const { Testimonial } = require("../models/testimonial");

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const addTestimonial = async (req, res) => {
  const testimonialDetails = req.body;
  try {
    const testimonial = await Testimonial.create(testimonialDetails);
    res.status(200).json({
      success: true,
      message: "Testimonial successfully created",
      data: testimonial,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      updates,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "Testimonial successfully updated",
      data: updatedTestimonial,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const replaceTestimonial = async (req, res) => {
  const { id } = req.params;
  const replaceTestimonial = req.body;
  try {
    const newTestimonial = await Testimonial.findOneAndReplace(
      { _id: id },
      replaceTestimonial,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "Testimonial successfully replaced",
      data: newTestimonial,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTestimonial = await Testimonial.findByIdAndDelete(id);
    if (!deleteTestimonial) {
      res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Testimonial successfully removed",
      data: deleteTestimonial,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

module.exports = {
  getTestimonials,
  addTestimonial,
  replaceTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
