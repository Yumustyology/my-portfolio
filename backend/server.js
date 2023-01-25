const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const projectsUpload = require("./routes/projectsUpload");
const experienceUpload = require("./routes/experienceUpload");
const projects = require("./routes/projects");
const contactMe = require("./routes/contactMe");
const AboutMe = require("./routes/aboutUpload");
require("dotenv").config()

// middleware init
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// mongodb connection
mongoose.connect(
  process.env.DB_CONNECT_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("database connected")
);

server.get("/", (req, res) => {
  res.status(200).send({
    greetings: "welcome to yumustyung's api",
  });
});

server.post("/projectsUpload", projectsUpload.uploadImgToS3);
server.put("/projectsUpload/:id", projectsUpload.uploadUpdatedImgToS3);

// server.post("/projectsEdit:/id", projectsUpload.uploadUpdatedImgToS3);

server.use("/contactMe", contactMe)

server.use("/projects", projects)

server.use("/experience", experienceUpload)

server.use("/aboutMe", AboutMe)

// const PORT = process.env.PORT;
const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => console.log("user hit the server"));
