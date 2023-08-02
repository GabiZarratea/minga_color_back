## MULTER

Utilice multer, un middleware de node.js que sirve para manipular contenido de tipo multipart/form-dat que utiliza solicitudes HTTP para enviar datos binarios a traves de formularios HTML o APIs web. Y asi realizar la carga de archivos a la nube de Firebase.

/middlewares/uploadMangaCover

/middlewares/uploadProfilePic

## FIREBASE

Ademas emplee Firebase para el almacenamiento de las imagenes de perfil y portadas de las mangas, ambas en sus respectivas carpetas lo cual logre declarando una constante denominada folderName y asignandole como valor el nombre del contenedor de Firebase, el valor de esta constante es luego añadido a la constante imageName que se encarga de asignar un nombre a cada archivo subido.

/services/firebase.cjs //

De este archivo se exportan dos funciones { uploadMangaCoverSVC, uploadProfilePicSVC } basicamente iguales excepto la consante folderName ya mencionada que tiene un valor diferente dependiendo de a que carpeta van dirigidos los archivos.
