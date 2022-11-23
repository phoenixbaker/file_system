const multer = require("multer");
const multerFs = require("multer-gridfs-storage");

const storage = new multerFs.GridFsStorage({
  url: "mongodb+srv://phoenixbaker:Disruckto2@cluster0.ssjzq.mongodb.net/File_System",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      bucketName: file.fieldname,
      filename: file.originalname,
    };
  },
});

module.exports = multer({ storage });
