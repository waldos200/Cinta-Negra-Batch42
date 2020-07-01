require('dotenv').config();
require('./mongoClient/index');
const express = require('express');
const api = express();
const path =require('path');
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extends: true }));
api.use(express.json({ extends: true }));

api.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

// CRUD Products
api.use(require('./routes/ProductRoutes'));
api.use(require('./routes/TicketRoutes'));

api.listen(PORT, () => console.log(`Listening on ${PORT}`));