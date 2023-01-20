const express = require("express");
const router = express.Router();
const ProjectSchema = require("../models/projectsSchema");
const aws = require("aws-sdk");
const config = require("../config/config");

const s3 = new aws.S3(config.awsConfig);
const bucket = "yusufmustahan-portfolio-bucket";

router.get("/", async (req, res) => {
  ProjectSchema.find().then((data) => res.send(data));
});

router.delete("/:id", async (req, res) => {
  ProjectSchema.findByIdAndDelete(req.params.id).then(async (data) => {
    console.log(data.key)
    var params = {
      Bucket: bucket,
      Key: data.key,
    };

    // delete image from s3
    s3.deleteObject(params, function (err, data) {
      if (err) console.log(err, err);
      else console.log("data on delete from s3", data);
    });

    res.status(200).send(data);
  });
});



module.exports = router;
