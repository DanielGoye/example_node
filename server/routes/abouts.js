const express = require("express");
const router = express.Router();

const {
  getAbouts,
  addAbout,
  replaceAbout,
  updateAbout,
  deleteAbout,
} = require("../controllers/aboutControllers");

router.route("/").get(getAbouts).post(addAbout);
router
  .route("/:id")
  .put(replaceAbout)
  .patch(updateAbout)
  .delete(deleteAbout);

module.exports = router;
