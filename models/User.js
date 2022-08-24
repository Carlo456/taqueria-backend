const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a user name...']
    },
    email: {
        type: String,
        required: [true, 'Please add the user email...'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add the product price...']
    } 
},{
    timestamps: true    
});

module.exports = mongoose.model('User', userSchema);