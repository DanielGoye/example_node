const express = require("express");
const router = express.Router();

const {
  getWorkExperiences,
  addWorkExperience,
  replaceWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
} = require("../controllers/workExperienceControllers");

router.route("/").get(getWorkExperiences).post(addWorkExperience);
router
  .route("/:id")
  .put(replaceWorkExperience)
  .patch(updateWorkExperience)
  .delete(deleteWorkExperience);

module.exports = router;
