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
                 .max(10)
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
             .max(35)
             .messages({
                'any.required':'NAME_REQUIRED',
                'string.max':'NAME_TOO_LARGE'
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