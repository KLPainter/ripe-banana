const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    studio: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Studio',
        required: true
    }, 
    released: {
        type: Number,
        required: true,
        min: 1895,
        max: 2200
    },
    cast: [{
        role: String,
        actor: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Actor',
            required: true
        }
    }]
});

const Film = mongoose.model('Film', filmSchema);
module.exports = Film;