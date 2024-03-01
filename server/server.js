require("dotenv").config();
const express = require("express");
const { dbConnect } = require("./config/databaseConfig");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const server = express();

dbConnect();
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(cors());

server.use("/api/testimonials", require("./routes/testimonials"));
server.use("/api/abouts", require("./routes/abouts"));
server.use("/api/brands", require("./routes/brands"));
server.use("/api/contacts", require("./routes/contacts"));
server.use("/api/workExperiences", require("./routes/workExperience"));
server.use("/api/experiences", require("./routes/experiences"));
server.use("/api/skills", require("./routes/skills"));
server.use("/api/works", require("./routes/works"));

server.listen(PORT, () => {
  console.log(`Server is running: PORT ${PORT}`);
});
