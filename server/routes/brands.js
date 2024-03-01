const express = require("express");
const router = express.Router();

const {
  getBrands,
  addBrand,
  replaceBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandControllers");

router.route("/").get(getBrands).post(addBrand);
router
  .route("/:id")
  .put(replaceBrand)
  .patch(updateBrand)
  .delete(deleteBrand);

module.exports = router;
