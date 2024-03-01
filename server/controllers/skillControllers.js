const { Skill } = require("../models/skills");

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.status(200).json({
      success: true,
      data: skills,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const addSkill = async (req, res) => {
  const skillDetails = req.body;
  try {
    const skill = await Skill.create(skillDetails);
    res.status(200).json({
      success: true,
      message: "Skill successfully created",
      data: skill,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const updateSkill = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      id,
      updates,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "Skill successfully updated",
      data: updatedSkill,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const replaceSkill = async (req, res) => {
  const { id } = req.params;
  const replaceSkill = req.body;
  try {
    const newSkill = await Skill.findOneAndReplace(
      { _id: id },
      replaceSkill,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "Skill successfully replaced",
      data: newSkill,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSkill = await Skill.findByIdAndDelete(id);
    if (!deleteSkill) {
      res.status(404).json({
        success: false,
        message: "Skill not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Skill successfully removed",
      data: deleteSkill,
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
  getSkills,
  addSkill,
  replaceSkill,
  updateSkill,
  deleteSkill,
};
