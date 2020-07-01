const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    subtotal:{
        type: Number,
        default: 0,
    },
    iva: {
        type:Number,
        default: 0,
    },
    total: {
        type: Number,
        default: 0,
    },
    products: 
        [{type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true}],
});

const Tickets = mongoose.model('Tickets', ticketSchema);

module.exports = Tickets;