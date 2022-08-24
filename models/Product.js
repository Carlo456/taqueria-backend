const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please add a name for the product...']
    },
    price: {
        type: Number,
        required: [true, 'Please add the product price...']
    } 
},{
    timestamps: true    
});

module.exports = mongoose.model('Product', productSchema);