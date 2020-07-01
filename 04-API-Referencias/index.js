require('dotenv').config();
require('./mongoClient/index');
const express = require('express');
const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extends: true }));
api.use(express.json({ extends: true }));

const Products = require('./models/Products');
const Tickets = require('./models/Tickets');

api.get('/', (req, res) => res.json({ message: "It's alive" }));

// CRUD Products
api.use(require('./routes/ProductRoutes'));
api.use(require('./routes/TicketRoutes'));

api.listen(PORT, () => console.log(`Listening on ${PORT}`));