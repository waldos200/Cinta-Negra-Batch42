// Configuracion
const express = require('express');
const api = express();
const PORT = process.env.PORT || 3000; // Configurar variables de entorno con "process.env.PORT ||"

// Endpoints
api.get('/', (req, res) => res.status(200).json({ massage: "it's alive!!!" }));

// Encender el servidor
api.listen(PORT, () => console.log(`listening on ${PORT}`));