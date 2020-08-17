const mongoose = require ('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    introduction: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    experience: {
        type: String,
        required: true,
        max: 1024,
        min: 10
    },
    education: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    rating: {
        type: String
    },
    price: {
        type: String
    },
    avaliability: {
        type: String
    }
})

module.exports = mongoose.model('Mentor', mentorSchema)