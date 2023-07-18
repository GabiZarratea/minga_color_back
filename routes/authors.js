import Router from 'express';
import read from '../controllers/authors/read.js'
import passport from 'passport';
import createAuthorController from '../controllers/authors/create.js';
import { getAuthorsAdmin } from '../controllers/authors/admin.js';

let author_router = Router();

// author_router.post() //crea un autor
author_router.get('/', read) //leer uno o todos
author_router.post('/create', createAuthorController )
author_router.get('/admin', getAuthorsAdmin)
// author_router.purge() //actualizar un autor
// author_router.delete() //elimina un autor


export default author_router;