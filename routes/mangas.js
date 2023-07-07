import Router from 'express';
import read from '../controllers/mangas/read_one.js';
import passport from '../middlewares/passport.js';

const manga_router = Router();

// manga_router.post() 
manga_router.get('/:id', passport.authenticate('jwt', { session:false }), read) 
// manga_router.purge() //actualizar un manga
// manga_router.delete() //elimina un manga


export default manga_router;