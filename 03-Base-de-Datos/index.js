// Configuracion
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const api = express();
const PORT = process.env.PORT || 3000; // Configurar variables de entorno con "process.env.PORT ||"

// Conexion a Base de Datos

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => console.log('Database connected!'))
    .catch(() => console.log('Error connecting to database...'));

// ODM -> Object Document Mapping esto es para mongoose
// ORM -> Object Relational Mapping esto para una base de datos con sql

/* 
    Ejercicio de diseño de ase de datos
    Un aeropuerto busca controlar los vuelos que llegan al lugar, desea conocer los vuelos que existen, a qué aerolínea pertenecen, las características del avión y el lugar de procedencia. Ayuda al aeropuerto a solucionar su problema.
*/

// Generar un esquema -> Definicion de las reglas de una coleccion 
const flightsSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
    },
    aircraft_name: {
        type: String,
        required: true,
    },
    aircraft_model: Number,
    flight_from: {
        type: String,
        required: true,
    },
});

// Generar un modelo a partir del esquema -> Objeto que nos permite interactuar con la coleccion
const Flights = mongoose.model('Flights', flightsSchema);

// Endpoints
api.get('/', (req, res) => res.status(200).json({ massage: "it's alive!!!" }));

// Create
api.post('/api/animales', (req, res) => {
    // 1) Recibir el animal que se quiere crear desde el cliente
    // 2) Pedirle a la base de datos que guarde el nuevo animal
    // 3) Con la respuesta que recibamos de la base de datos, le respondemos al cliente
    const animal = { id: 'A1', nombre: 'Firulais', edad: 4 };
    res.status(201).json({ animal });
})

// Read

// Update

// Delete

// Encender el servidor
api.listen(PORT, () => console.log(`listening on ${PORT}`));