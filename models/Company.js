import {Schema, Types, model} from 'mongoose'

let collection = 'companies' //los nombres de la colecciones van siempre en plural (porque son un conjunto de), van siemore en ingles y tienen que ser descriptivos del recurso (ej.. recurso: category => coleccion: categories)
let schema = new Schema({ //defino el primer objeto con las propiedades necesarias para el modelo
    name: {type: String},
    city: {type: String},
    address: {type: String},
    photo: {type: String, required: true},
    active:{type: Boolean, default:false},
    user_id:{type: Types.ObjectId, required:true, ref:'users'}
} , {
    timestamps: true
})

let Company = model(collection, schema)

export default Company