import Router from "express";
import read_one from "../controllers/mangas/read_one.js";
import read from "../controllers/mangas/read.js";
import createMangaController from "../controllers/mangas/create.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import has_permission from "../middlewares/has_permission.js";
import mangaCreate from "../schemas/auth/createManga.js";
import mangaExists from "../middlewares/mangaExists.js";

const manga_router = Router();

// manga_router.post()
manga_router.get("/:id", read_one);
// manga_router.post() //crea un autor
manga_router.get("/", passport.authenticate("jwt", { session: false }), read); //leer uno o todos
manga_router.post("/", validator(mangaCreate), passport.authenticate("jwt", { session: false }), has_permission, mangaExists, createMangaController);
//passport.authenticate("jwt", { session: false }),
//
export default manga_router;
