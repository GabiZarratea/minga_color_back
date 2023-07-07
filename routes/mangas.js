import Router from 'express';
import read_one from '../controllers/mangas/read_one.js';
import passport from '../middlewares/passport.js';
import read from '../controllers/mangas/read.js'
import orderExists from "../middlewares/exists_order.js";
import createMangaController from "../controllers/mangas/create.js";
import verifyAuthor from "../middlewares/isPropertyOf.js";
import passport from "../middlewares/passport.js";


const manga_router = Router();

// manga_router.post() 
manga_router.get('/:id', passport.authenticate('jwt', { session:false }), read_one) 
// manga_router.post() //crea un autor
manga_router.get('/', read) //leer uno o todos
manga_router.post("/create", passport.authenticate("jwt", { session: false }), createMangaController);



export default manga_router;