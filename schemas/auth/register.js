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
   photo: joi.string()
              .required()
              .uri()
              .messages({
                'any.required':'NAME_REQUIRED',
                'string.empty':'NAME_REQUIRED',
                'string.uri':'INVALID_URL'
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
                 })
})

export default userRegister