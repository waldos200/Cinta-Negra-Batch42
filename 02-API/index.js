// Configuracion
const express = require('express');
const app = express();

// Endpoints
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Encender la API
app.listen(3000, () => console.log('Esta vivo'));