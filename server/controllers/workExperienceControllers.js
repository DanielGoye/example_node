const { Experience } = require("../models/experiences");
const { WorkExperience } = require("../models/workExperience");

const getWorkExperiences = async (req, res) => {
  try {
    const workExperiences = await WorkExperience.find({});
    res.status(200).json({
      success: true,
      data: workExperiences,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const addWorkExperience = async (req, res) => {
  const workExperienceDetails = {
    name: req.body.name,
    company: req.body.company,
    desc: req.body.desc,
  };
  const year = req.body.year;
  try {
    const workExperience = await WorkExperience.create(workExperienceDetails);
    const experience = await Experience.findOneAndUpdate(
      { year },
      { $push: { works: workExperience._id } },
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "WorkExperience successfully created",
      data: { workExperience, experience },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const updateWorkExperience = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedWorkExperience = await WorkExperience.findByIdAndUpdate(
      id,
      updates,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "WorkExperience successfully updated",
      data: updatedWorkExperience,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const replaceWorkExperience = async (req, res) => {
  const { id } = req.params;
  const replaceWorkExperience = req.body;
  try {
    const newWorkExperience = await WorkExperience.findOneAndReplace(
      { _id: id },
      replaceWorkExperience,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "WorkExperience successfully replaced",
      data: newWorkExperience,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const deleteWorkExperience = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWorkExperience = await WorkExperience.findByIdAndDelete(id);
    if (!deleteWorkExperience) {
      res.status(404).json({
        success: false,
        message: "WorkExperience not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "WorkExperience successfully removed",
      data: deleteWorkExperience,
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
  getWorkExperiences,
  addWorkExperience,
  replaceWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
};
