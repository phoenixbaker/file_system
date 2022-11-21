const { Schema, model, default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  files: {
    type: [mongoose.Types.ObjectId],
    ref: "Document",
  },
});

userSchema.methods.generateAuthToken = function () {
  return (token = jwt.sign(
    {
      email: this.email,
      files: this.files,
      name: this.name,
    },
    "jwtPrivateKey"
  ));
};

const User = model("User", userSchema);

exports.User = User;
