require('dotenv').config();
require('./mongoClient/index');
const express = require('express');
const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extends: true }));
api.use(express.json({ extends: true }));

const Products = require('./models/Products');

api.get('/', (req, res) => res.json({ message: "It's alive" }));

// CRUD Products
api.post('/api/products', (req, res) => {
    const { body } = req;
    const newProduct = new Products(body);
    newProduct.save()
        .then(mongoRes => res.status(201).json(mongoRes))
        .catch(err => res.status(400).json(err));
})

api.listen(PORT, () => console.log(`Listening on ${PORT}`));