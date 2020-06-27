// Configuracion
const express = require('express');
const mongoose = require('mongoose')
const api = express();
const PORT = process.env.PORT || 3000; // Configurar variables de entorno con "process.env.PORT ||"

// Conexion a Base de Datos

mongoose.connect('mongodb://waldo:abc123devf@cintanegrab42-shard-00-00-vdmib.mongodb.net:27017,cintanegrab42-shard-00-01-vdmib.mongodb.net:27017,cintanegrab42-shard-00-02-vdmib.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegraB42-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => console.log('Database connected'))
    .catch(() => console.log('Error connecting to database...'))

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