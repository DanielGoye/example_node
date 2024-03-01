const express = require("express");
const router = express.Router();

const {
  getWorks,
  addWork,
  replaceWork,
  updateWork,
  deleteWork,
} = require("../controllers/workControllers");

router.route("/").get(getWorks).post(addWork);
router
  .route("/:id")
  .put(replaceWork)
  .patch(updateWork)
  .delete(deleteWork);

module.exports = router;
