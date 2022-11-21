const express = require("express");
const { User } = require("../models/User");
const { Document } = require("../models/Document");
const router = express.Router();

router.post("/new", async (req, res) => {
  const document = await Document.findOne({ path: req.body.id });
  let user = await User.findOneAndUpdate({ email: req.body.email });
  for (var i = 0; i < user.files.length; i++) {
    if (String(user.files[i]) == String(document._id)) return res.end();
  }
  user.files.push(document._id);
  user.save();
  return res.end();
});

router.get("/get", async (req, res) => {
  const user = await User.findOne({
    email: "phoenixbvu@gmail.com",
  }).populate("files");
  res.send(user);
});

module.exports = router;
