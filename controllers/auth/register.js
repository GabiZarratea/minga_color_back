import User from '../../models/User.js'

export default async( req, res ) => {
    try{

        //Tarer los datos del formulario/Postman
        const one = await User.create(req.body)


        // //Verificar si el correo electronico ya está registrado
        // const existingUser = await User.findOne(one.email)
        
        // if(existingUser){
        //     return res.status(400).json({error: 'El correo electronico ya está registrado'})
        // }

        //Devolver una respuesta exitosa
        return res.status(201).json({ response: one, success: true , message: 'User created successfully'})
    }
    catch(error){
        next(error)
    }
}