import Router from 'express';

import read from '../controllers/users/read.js'

import signin from '../controllers/auth/signin.js'

import userSignin from '../schemas/auth/userSigninSchema.js';

import validator from '../middlewares/validator.js';

let auth_router = Router();

auth_router.get('/', read) //leer uno o todos

auth_router.post('/signin', validator(userSignin), signin)


export default auth_router;