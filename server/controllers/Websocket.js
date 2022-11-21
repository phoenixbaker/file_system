const { Document } = require("../models/Document");
const { User } = require("../models/User");

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const defaultValue = "";

module.exports = function runWebSocket() {
  io.on("connection", (socket) => {
    socket.on("get-document", async (documentId) => {
      const document = await findOrCreateDocument(documentId);
      socket.join(document._id);

      socket.emit("load-document", document.data);

      socket.on("send-changes", (delta) => {
        socket.broadcast.to(document._id).emit("receive-changes", delta);
      });

      socket.on("save-document", async (data) => {
        await Document.findByIdAndUpdate(document._id, { data });
      });
    });
    console.log("connected");
  });

  async function findOrCreateDocument(id) {
    if (id == null) return;

    let document = await Document.findOne({ path: id });
    if (document) return document;
    return await Document.create({ path: id, data: defaultValue });
  }
};
