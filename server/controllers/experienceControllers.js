const { Experience } = require("../models/experiences");
const { WorkExperience } = require("../models/workExperience");

const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({}).populate("works");
    res.status(200).json({
      success: true,
      data: experiences,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const addExperience = async (req, res) => {
  const experienceDetails = { year: req.body.year , works: []};
  try {
    for (const work of req.body.works) {
      const newWorkExperience = await WorkExperience.create(work);
      experienceDetails.works.push(newWorkExperience._id);
    }
    const experience = await Experience.create(experienceDetails);
    const fullExperience = await Experience.findById(experience._id).populate("works");
    res.status(200).json({
      success: true,
      message: "Experience successfully created",
      data: fullExperience,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const updateExperience = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(id, updates, {
      returnDocument: "after",
    });
    res.status(200).json({
      success: true,
      message: "Experience successfully updated",
      data: updatedExperience,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const replaceExperience = async (req, res) => {
  const { id } = req.params;
  const replaceExperience = req.body;
  try {
    const newExperience = await Experience.findOneAndReplace(
      { _id: id },
      replaceExperience,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "Experience successfully replaced",
      data: newExperience,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const deleteExperience = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteExperience = await Experience.findByIdAndDelete(id);
    if (!deleteExperience) {
      res.status(404).json({
        success: false,
        message: "Experience not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Experience successfully removed",
      data: deleteExperience,
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
  getExperiences,
  addExperience,
  replaceExperience,
  updateExperience,
  deleteExperience,
};
