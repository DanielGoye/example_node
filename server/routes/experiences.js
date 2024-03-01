const express = require("express");
const router = express.Router();

const {
  getExperiences,
  addExperience,
  replaceExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceControllers");

router.route("/").get(getExperiences).post(addExperience);
router
  .route("/:id")
  .put(replaceExperience)
  .patch(updateExperience)
  .delete(deleteExperience);

module.exports = router;
