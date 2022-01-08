const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Ingresar = new Schema({

    pelicula: String, 
    año: String,
    nacionalidad: String,
    idioma: String,
    genero: String,
    estudio: String
}); 
module.exports = mongoose.model('Productos', Ingresar);