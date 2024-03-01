const { Brand } = require("../models/brands");

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(200).json({
      success: true,
      data: brands,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const addBrand = async (req, res) => {
  const brandDetails = req.body;
  try {
    const brand = await Brand.create(brandDetails);
    res.status(200).json({
      success: true,
      message: "Brand successfully created",
      data: brand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const updateBrand = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, updates, {
      returnDocument: "after",
    });
    res.status(200).json({
      success: true,
      message: "Brand successfully updated",
      data: updatedBrand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const replaceBrand = async (req, res) => {
  const { id } = req.params;
  const replaceBrand = req.body;
  try {
    const newBrand = await Brand.findOneAndReplace({ _id: id }, replaceBrand, {
      returnDocument: "after",
    });
    res.status(200).json({
      success: true,
      message: "Brand successfully replaced",
      data: newBrand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBrand = await Brand.findByIdAndDelete(id);
    if (!deleteBrand) {
      res.status(404).json({
        success: false,
        message: "Brand not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Brand successfully removed",
      data: deleteBrand,
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
  getBrands,
  addBrand,
  replaceBrand,
  updateBrand,
  deleteBrand,
};
