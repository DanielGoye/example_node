const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODBURL);
    console.log(`Database connected: ${connection.connection.host}`);
  } catch (error) {
    const err = new Error(error);
    console.log({ error: true, message: err.message });
    process.exit();
  }
};

module.exports = { dbConnect };
