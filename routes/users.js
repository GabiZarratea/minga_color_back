
import Router from 'express';
import read from '../controllers/users/read.js'
import register from '../controllers/auth/register.js'
import validator from '../middlewares/validator.js'
import userRegister from '../schemas/auth/register.js'
import signin from '../controllers/auth/signin.js'
import userSignin from '../schemas/auth/userSigninSchema.js';
import accountNotExist from '../middlewares/accountNotExist.js';
import passwordIsOk from '../middlewares/passwordIsOk.js';
import generateToken from '../middlewares/generateToken.js';

let auth_router = Router();

auth_router.get('/', read)
auth_router.post('/register', validator(userRegister), register)
auth_router.post('/signin', validator(userSignin), accountNotExist,passwordIsOk,generateToken, signin)


export default auth_router;