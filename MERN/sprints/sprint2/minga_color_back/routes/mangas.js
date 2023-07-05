import express from "express";
import read from "../controllers/mangas/read.js";
import orderExists from "../middlewares/exists_order.js";
import createMangaController from "../controllers/mangas/create.js";
import verifyAuthor from "../middlewares/isPropertyOf.js";
import passport from "../middlewares/passport.js";
let router = express.Router();
// orderExists preguntar si el middleware lo uso cuando crea una manga o un capitulo

router.post("/create", passport.authenticate("jwt", { session: false }), orderExists, createMangaController);
router.get("/", read); //leer uno o todos
// manga_router.purge() //actualizar un autor
// manga_router.delete() //elimina un autor

export default router;
// verifyAuthor, passport.authenticate("jwt", { session: false }),

// que onda el verify author passport y orderExist
