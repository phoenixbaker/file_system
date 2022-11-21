const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const busboy = require("connect-busboy");
const cors = require("cors");
const app = express();
const port = 3001;

const auth = require("./controllers/auth");
const files = require("./controllers/files");
const Websocket = require("./controllers/Websocket");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(busboy());

mongoose.connect(
  "mongodb+srv://phoenixbaker:Disruckto2@cluster0.ssjzq.mongodb.net/File_System"
);

Websocket();

app.use("/api/auth", auth);
app.use("/api/documents", files);

app.listen(4001, () => console.log("Listening on port 4001"));
