const { Schema, model, default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  dir: {
    type: [mongoose.Types.ObjectId],
    ref: "Directory",
  },
});

userSchema.methods.generateAuthToken = function () {
  return (token = jwt.sign(
    {
      email: this.email,
      dir: this.dir,
      name: this.name,
    },
    "jwtPrivateKey"
  ));
};

const User = model("User", userSchema);

exports.User = User;
