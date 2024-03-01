const { sendEmail } = require("../utils/sendEmail");
const { Contact } = require("../models/contact");

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const addContact = async (req, res) => {
  const contactDetails = req.body;
  try {
    const sendEmailResult = await sendEmail(req);
    const contact = await Contact.create(contactDetails);
    res.status(200).json({
      success: true,
      message: "Contact successfully created",
      sendEmailResult,
      data: contact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(id, updates, {
      returnDocument: "after",
    });
    res.status(200).json({
      success: true,
      message: "Contact successfully updated",
      data: updatedContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const replaceContact = async (req, res) => {
  const { id } = req.params;
  const replaceContact = req.body;
  try {
    const newContact = await Contact.findOneAndReplace(
      { _id: id },
      replaceContact,
      {
        returnDocument: "after",
      }
    );
    res.status(200).json({
      success: true,
      message: "Contact successfully replaced",
      data: newContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: new Error(error).message,
    });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteContact = await Contact.findByIdAndDelete(id);
    if (!deleteContact) {
      res.status(404).json({
        success: false,
        message: "Contact not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Contact successfully removed",
      data: deleteContact,
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
  getContacts,
  addContact,
  replaceContact,
  updateContact,
  deleteContact,
};
