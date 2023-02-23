const mongoose = require('mongoose');

const pastelSchema = mongoose.Schema({
   name: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    price2: {
        type: Number
    },
    price3: {
        type: Number
    },
     longitud: {
        type: Number,
        required: true
    },
    longitud2: {
        type: Number
    },
    longitud3: {
        type: Number
    }
})

module.exports = mongoose.model('pastel', pastelSchema);