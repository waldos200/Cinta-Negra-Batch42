require('dotenv').config();
require('./mongoClient/index');
const express = require('express');
const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extends: true }));
api.use(express.json({ extends: true }));

const Products = require('./models/Products');

// CRUD Products

api.get('/', (req, res) => res.json({ message: "It's alive" }));

api.listen(PORT, () => console.log(`Listening on ${PORT}`));