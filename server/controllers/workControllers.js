const { Work } = require("../models/works");

const getWorks = async (req, res) => {
  try {
    const works = await Work.find({});
    res.status(200).json({
      success: true,
      data: works,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const addWork = async (req, res) => {
  const workDetails = req.body;
  try {
    const work = await Work.create(workDetails);
    res.status(200).json({
      success: true,
      message: "Work successfully created",
      data: work,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const updateWork = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedWork = await Work.findByIdAndUpdate(
      id,
      updates,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "Work successfully updated",
      data: updatedWork,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const replaceWork = async (req, res) => {
  const { id } = req.params;
  const replaceWork = req.body;
  try {
    const newWork = await Work.findOneAndReplace(
      { _id: id },
      replaceWork,
      { returnDocument: "after" }
    );
    res.status(200).json({
      success: true,
      message: "Work successfully replaced",
      data: newWork,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const deleteWork = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWork = await Work.findByIdAndDelete(id);
    if (!deleteWork) {
      res.status(404).json({
        success: false,
        message: "Work not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Work successfully removed",
      data: deleteWork,
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
  getWorks,
  addWork,
  replaceWork,
  updateWork,
  deleteWork,
};
