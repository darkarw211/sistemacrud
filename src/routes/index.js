const express = require ('express');
const { models } = require('mongoose');
const Peliculas = require('../models/peliculas');
const router = express.Router();
const model = require('../models/peliculas')();

const Ingresar = require('../models/peliculas'); //Constante  que trae el recusro de Productos 

//Enviar los valores en base al modelo creado
router.get('/', async (req,res) => {
    const Peliculas=  await Ingresar.find(); //se envian los valores FIND = Para traer los valores de la base de datos en Mongo
    console.log(Peliculas); //Se imprimen en consola los valores guardados en la base de datos  
    res.render('index.ejs', {
        Peliculas
    }); //Se carga la pagina de index 
});

//Creacion de nueva ruta para agregar registros desde formulario
router.post('/add', async (req,res) => {
    const pelicula =  new Ingresar(req.body); //se envian los valores FIND = Para traer los valores de la base de datos en Mongo
    await pelicula.save(); //Se gurdan los valores que se van a mandar 
    res.redirect('/');  
});

router.get('/del/:id', async (req, res) => {
console.log(req.params.id);
const reg = await Ingresar.findByIdAndRemove(req.params.id);
console.log(reg);
res.redirect('/');  
});

router.get('/edit/:id', async (req, res) => {
    try {
        const pelicula = await Ingresar.findById(req.params.id).lean(); 
          res.render("editar", { pelicula });
    } catch (error) {
        console.log(error.message);
    }
});

router.post("/edit/:id", async (req, res) => {
    const { id } = req.params;
    await Ingresar.findByIdAndUpdate(id, req.body);
    res.redirect("/");
});

module.exports = router;

