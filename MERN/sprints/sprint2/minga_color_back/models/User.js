import {Schema, model} from 'mongoose'
//cluster: conjunto de base de datos(el link de mongo que obtienen es del cluster)
//db: conjunto de colecciones (coleccion hace referecnia a recurso y recurso hace referencia a los modelos de datos que necesita mi aplicacion)
//coleccion: conjunto de documentos
//documento: dato
//el array de eventos que se fetcheaba en amazing events me traia toda la coleccion de eventos
//cada objeto de ese array era un documento de la coleccion

let collection = 'users' //los nombres de la colecciones van siempre en plural (porque son un conjunto de), van siemore en ingles y tienen que ser descriptivos del recurso (ej.. recurso: category => coleccion: categories)
let schema = new Schema({ //defino el primer objeto con las propiedades necesarias para el modelo
    email: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: true},
    role:{type: Number, required: true},
    online:{type: Boolean},
    verified:{type: Boolean, required: true},
    verify_code:{type: String, required: true}
} , {
    timestamps: true
})

let User = model(collection, schema)

export default User