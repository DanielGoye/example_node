const express = require("express");
const router = express.Router();

const {
  getSkills,
  addSkill,
  replaceSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillControllers");

router.route("/").get(getSkills).post(addSkill);
router
  .route("/:id")
  .put(replaceSkill)
  .patch(updateSkill)
  .delete(deleteSkill);

module.exports = router;
