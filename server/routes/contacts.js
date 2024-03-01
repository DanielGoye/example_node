const express = require("express");
const router = express.Router();

const {
  getContacts,
  addContact,
  replaceContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(getContacts).post(addContact);
router
  .route("/:id")
  .put(replaceContact)
  .patch(updateContact)
  .delete(deleteContact);

module.exports = router;
