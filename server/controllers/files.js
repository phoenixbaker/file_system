const express = require("express");
const { User } = require("../models/User");
const { Document } = require("../models/Document");
const { Directory } = require("../models/Directory");
const router = express.Router();

router.post("/new", async (req, res) => {
  const document = await Document.findOne({ path: req.body.id });
  if (!document) return res.status(400).send("Bad Requested");

  let dir = await Directory.findById(req.body.dir_id);
  for (var i = 0; i < dir.docs.length; i++) {
    if (String(dir.docs[i]) == String(document._id)) return res.end();
  }

  dir.docs.push(document._id);
  dir.save();
  return res.end();
});

router.post("/dir", async (req, res) => {
  let dir = await Directory.findById(req.body.dir_id);
  if (!dir) return res.status(404).send("Bad Request");

  const newDir = new Directory({
    name: req.body.name,
  });
  newDir.save();

  dir.dirs.push(newDir);
  dir.save();
  dir.populate(["dirs", "docs"]);
  res.send(dir);
});

router.get("/dir/:id", async (req, res) => {
  const dir = await Directory.findById(req.params.id).populate([
    "docs",
    "dirs",
  ]);
  if (!dir) res.status(404).send("Not Found");
  res.send(dir);
});

router.get("/get", async (req, res) => {
  const user = await User.findOne({
    email: "phoenixbvu@gmail.com",
  }).populate("dir");
  res.send(user);
});

module.exports = router;
