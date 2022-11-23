const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const mongoose = require("mongoose");

const { Document } = require("../models/Document");
const { Directory } = require("../models/Directory");

let conn = mongoose.connection;

conn.once("open", () => {
  console.log("Storage opened Successfully");
  let gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "files",
  });

  router.post("/files/:path", upload.array("files"), async (req, res) => {
    let directory = await Directory.findById(req.params.path);

    if (!directory) return res.status(400).send("Bad Request");
    req.files.map((file, i) => {
      directory.files.push(file);
    });
    directory.save();
  });

  router.get("/files/:id", async (req, res) => {
    var objectId = new mongoose.Types.ObjectId(req.params.id);
    gridfsBucket.find({ _id: objectId }).toArray((err, file) => {
      if (err) return console.warn(err);
      if (!file || file.length === 0)
        return res.status(404).send("File not found");
      file = file[0];

      if (
        file.contentType == "image/jpeg" ||
        file.contentType == "image/png" ||
        file.contentType == "image/jpg"
      ) {
        let data = [];
        let readstream = gridfsBucket.openDownloadStream(file._id);

        readstream.on("data", (chunk) => data.push(chunk));
        readstream.on("end", () => {
          data = Buffer.concat(data);
          let img = Buffer(data).toString("base64");
          res.json(img);
        });
      }
    });
  });
});

module.exports = router;
