const express = require("express");
const router = express.Router();

const {
  getTestimonials,
  addTestimonial,
  replaceTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialControllers");

router.route("/").get(getTestimonials).post(addTestimonial);
router
  .route("/:id")
  .put(replaceTestimonial)
  .patch(updateTestimonial)
  .delete(deleteTestimonial);

module.exports = router;
