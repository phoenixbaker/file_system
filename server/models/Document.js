const { Schema, model } = require("mongoose");

const documentSchema = new Schema({
  path: String,
  data: Object,
});

exports.Document = model("Document", documentSchema);
