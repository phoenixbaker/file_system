const { Schema, model, default: mongoose } = require("mongoose");

const dirSchema = new Schema({
  name: {
    type: String,
    default: "Root Folder",
  },
  docs: {
    type: [mongoose.Types.ObjectId],
    ref: "Document",
  },
  dirs: {
    type: [mongoose.Types.ObjectId],
    ref: "Directory",
  },
  files: [Object],
});

exports.Directory = model("Directory", dirSchema);
