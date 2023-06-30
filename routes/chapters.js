import Router from 'express';
import read from '../controllers/chapters/read.js'
import verifyAuthor from '../middlewares/isPropertyOf.js';

let chapter_router = Router();

// chapter_router.post() //crea un autor
chapter_router.get('/', read)
chapter_router.post('/chapters', verifyAuthor)

// chapter_router.purge() //actualizar un autor
// chapter_router.delete() //elimina un autor


export default chapter_router