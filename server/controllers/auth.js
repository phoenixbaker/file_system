const express = require("express");
const { User } = require("../models/User");
const router = express.Router();

router.post("/credentials", async (req, res) => {
  console.log("here");
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Email");

  if (user.password !== req.body.password)
    return res.status(400).send("Invalid Password");

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(user);
});

router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Account with email already found");

  user = new User(req.body);
  user.save();

  const token = user.generateAuthToken();

  res.header("x-auth-token", token).send(user);
});

module.exports = router;
