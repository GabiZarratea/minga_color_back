import joi from 'joi'

const userRegister = joi.object({
    email: joi.string()
              .required()
              .email({minDomainSegments: 2})
              .messages({
                'any.required':'NAME_REQUIRED',
                'string.empty':'NAME_REQUIRED',
                'string.email':'INVALID_MAIL'
              }),
    password: joi.string()
                 .required()
                 .min(8)
                 .max(35)
                 .alphanum()
                 .messages({
                    'any.required':'NAME_REQUIRED',
                    'string.empty':'NAME_REQUIRED',
                    'string.min':'NAME_TOO_SHORT',
                    'string.max':'NAME_TOO_LARGE'
                 }),
    photo: joi.string()
              .required()
              .uri()
              .messages({
                'any.required':'NAME_REQUIRED',
                'string.empty':'NAME_REQUIRED',
                'string.uri':'INVALID_URL'
              }),
    role: joi.number()
             .required()
             .messages({
                'any.required':'NAME_REQUIRED'
             }),
    online: joi.boolean(),
    verified: joi.boolean()
                 .required()
                 .messages({
                    'any.required':'NAME_REQUIRED'
                 }),
    verify_code: joi.string()
                    .min(10)
                    .required()
                    .messages({
                        'any.required':'NAME_REQUIRED',
                        'string.min':'NAME_TOO_SHORT'
                    }),
})

export default userRegister