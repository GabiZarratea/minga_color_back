import multer from "multer";

function uploadMangaCover() {
  const storage = multer.memoryStorage();

  const upload = multer({
    storage,
    limits: { fileSize: 9999999 },
    fileFilter: function (req, file, cb) {
      let type = file.mimetype.startsWith("image/");
      type ? cb(null, true) : cb(new Error("File is not an image"));
    },
  }).single("cover_photo");
  return upload;
}

export default uploadMangaCover;
