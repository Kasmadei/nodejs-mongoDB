const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    body: String,
    rating: Number
});

module.exports = mongoose.model('Review', reviewSchema)