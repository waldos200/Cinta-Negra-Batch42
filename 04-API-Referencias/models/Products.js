const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type:Number,
        requiered: true,
    },
    stock: {
        type: Number,
        default: 25,
    },
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;