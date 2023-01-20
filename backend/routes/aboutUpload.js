const express = require("express");
const router = express.Router();
const AboutMeSchema = require("../models/AboutMeSchema");

router.get("/", async (req, res) => {
  AboutMeSchema.findOne().then((data) => res.send(data));
});

router.post("/", (req, res) => {
  let newAbout = new AboutMeSchema({
    info: req.body.info,
  });
  try {
    newAbout.save().then(async (data) => {
      res.status(200).send({
        data,
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/", async (req, res) => {
  AboutMeSchema.deleteOne().then(async (data) => {
    res.status(200).send({
      data,
    });
  });
});

router.patch("/", async (req, res) => {
  console.log("trying to patch ?..");
  let about = await AboutMeSchema.findOne();
  about.info = req.body.info;
  try {
    about.save().then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
