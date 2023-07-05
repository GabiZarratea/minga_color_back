import Router from 'express';
import read from '../controllers/mangas/read.js'
import orderExists from "../middlewares/exists_order.js";
import createMangaController from "../controllers/mangas/create.js";
import verifyAuthor from "../middlewares/isPropertyOf.js";
import passport from "../middlewares/passport.js";

let manga_router = Router();

// manga_router.post() //crea un autor
manga_router.get('/', read) //leer uno o todos
manga_router.post("/create", passport.authenticate("jwt", { session: false }), createMangaController);
// manga_router.purge() //actualizar un autor
// manga_router.delete() //elimina un autor


export default manga_router;