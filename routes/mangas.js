import Router from 'express';
import read_one from '../controllers/mangas/read_one.js';
import read from '../controllers/mangas/read.js'
import createMangaController from "../controllers/mangas/create.js";
import passport from "../middlewares/passport.js";


const manga_router = Router();

// manga_router.post() 
manga_router.get('/:id', passport.authenticate("jwt", { session: false }), read_one) 
// manga_router.post() //crea un manga
manga_router.get('/', passport.authenticate("jwt", { session: false }), read) //leer uno o todos
manga_router.post("/create", passport.authenticate("jwt", { session: false }), createMangaController);

export default manga_router;