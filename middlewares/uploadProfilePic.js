import multer from "multer";

function uploadProfilePic() {
  const storage = multer.memoryStorage(); //almacena temporalmente los archivos en la memoria del server para porcesarlo antes de guardarlo

  const upload = multer({
    storage,
    limits: { fileSize: 9999999 },
    fileFilter: function (req, file, cb) {
      //cb callback
      let type = file.mimetype.startsWith("image/");
      type ? cb(null, true) : cb(new Error("File is not an image")); // if callback image true else error
    },
  }).single("photo"); // el middleware se configura para manejar solo una imagen que se envia en el campo photo del formulario
  return upload;
}

export default uploadProfilePic;
