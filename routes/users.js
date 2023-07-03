import Router from 'express'
import read from '../controllers/users/read.js'
import register from '../controllers/auth/register.js'
import validator from '../middlewares/validator.js'
import userRegister from '../schemas/auth/register.js'

let auth_router = Router()

auth_router.get('/', read)
auth_router.post('/register', validator(userRegister), register)

export default auth_router