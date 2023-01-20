const express = require("express");
const router = express.Router();
const ExperienceSchema = require("../models/experienceSchema");

router.get("/", async (req, res) => {
  ExperienceSchema.find().then((data) => res.send(data));
});

router.post("/", (req, res) => {
  let newExperience = new ExperienceSchema({
    companyName: req.body.companyName,
    tasks: req.body.tasks,
    role: req.body.role,
    fromDate: req.body.fromDate,
    toDate: req.body.toDate,
    country: req.body.country,
    tagName: req.body.tagName,
  });
  try {
    newExperience.save().then(async (data) => {
      res.status(200).send({
        data,
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  ExperienceSchema.findByIdAndDelete(req.params.id).then(async (data) => {
    res.status(200).send({
      data,
    });
  });
});

router.patch("/:id", async (req, res) => {
  console.log("trying to patch ?..")
  let experience = await ExperienceSchema.findById(req.params.id);
  experience.companyName = req.body.companyName;
  experience.tasks = req.body.tasks;
  experience.role = req.body.role;
  experience.fromDate = req.body.fromDate;
  experience.toDate = req.body.toDate;
  experience.country = req.body.country;
  experience.tagName = req.body.tagName;
  try {
    experience.save().then(data => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
