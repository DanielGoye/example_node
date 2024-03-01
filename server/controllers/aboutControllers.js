const {About} = require("../models/abouts");

const getAbouts = async (req, res) => {
  try {
    const abouts = await About.find({});
    res.status(200).json({
      success: true,
      data: abouts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const addAbout = async (req, res) => {
  const aboutDetails = req.body;
  try {
    const about = await About.create(aboutDetails);
    res.status(200).json({
      success: true,
      message: "About successfully created",
      data: about,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const updateAbout = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedAbout = await About.findByIdAndUpdate(
      id,
      updates,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "About successfully updated",
      data: updatedAbout,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const replaceAbout = async (req, res) => {
  const { id } = req.params;
  const replaceAbout = req.body;
  try {
    const newAbout = await About.findOneAndReplace(
      { _id: id },
      replaceAbout,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "About successfully replaced",
      data: newAbout,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const deleteAbout = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteAbout = await About.findByIdAndDelete(id);
    if (!deleteAbout) {
      res.status(404).json({
        success: false,
        message: "About not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "About successfully removed",
      data: deleteAbout,
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
  getAbouts,
  addAbout,
  replaceAbout,
  updateAbout,
  deleteAbout,
};
