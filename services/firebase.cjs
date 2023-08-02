let admin = require("firebase-admin");
let serviceAccount = require("../firebase-key.json");
const { date } = require("joi");

const BUCKET = "minga-mh.appspot.com"; //nombre del proyecto de firebase

admin.initializeApp({
  // se inicializa la app con las credenciales almacenadas en firebase-key.json
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadProfilePicSVC = (req, res, next) => {
  //el archivo se guardo en la memoria del server en el middleware anterior y lo buscamos aca con req.file
  if (!req.file) return next(); // if req.file = false, avanza al siguiente middleware
  const image = req.file; //se guarda el archivo en la constante image
  const folderName = "Profile-Picture";
  const imageName = folderName + "/" + Date.now() + "." + image.originalname.split(".").pop(); // Include the folder name in the imageName
  const file = bucket.file(imageName);
  const stream = file.createWriteStream({
    //metodo, crea un flujo de  escritura para el archivo
    metadata: {
      contentType: image.mimetype, //mime identifica el tipo de dato a almacenar
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    await file.makePublic(); //hace que sea accesible con la url

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${imageName}`; // contiene la url publica de la imagen

    next();
  });

  stream.end(image.buffer);
};

const uploadMangaCoverSVC = (req, res, next) => {
  if (!req.file) return next();
  const image = req.file;
  const folderName = "Manga-Cover";
  const imageName = folderName + "/" + Date.now() + "." + image.originalname.split(".").pop(); // Include the folder name in the imageName
  const file = bucket.file(imageName);
  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    await file.makePublic();

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${imageName}`;

    next();
  });

  stream.end(image.buffer);
};

module.exports = { uploadProfilePicSVC, uploadMangaCoverSVC };
