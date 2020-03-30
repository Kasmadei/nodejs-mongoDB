const exporess = require('express');
const router = exporess.Router();
const mongoose = require('mongoose');

const Review = require('../models/review');

router.get('/', (req, res, next) => {
    Review.find().then(result => {
        res.status(200).json({
            reviews: result
        });
    }).catch(err => console.log(err))
})

router.post('/', (req, res, next) => {
    const { review } = req.body
    const newReview = new Review({
        _id: new mongoose.Types.ObjectId(),
        title: review.title,
        body: review.body,
        rating: review.rating
    });
    newReview.save().then(result => {
    }).catch(err => console.log(err))
    res.status(200).json({
        wasCreated: true,
        createdReview: newReview
    });
})

router.delete('/:reviewId', (req, res, next) => {
    const reviewId = req.params.reviewId;
    Review.deleteOne({ _id: reviewId })
    .then(result => {
        res.status(200).json({
            message: `product id: ${reviewId} deleted`
        })
    })
    .catch (err => console.log(err)) 
})

router.patch('/:reviewId', (req, res, next) => {
    const reviewId = req.params.reviewId;
    const { review } = req.body;
    Review.updateOne({ _id: reviewId }, {$set: review })
    .then(result => {
        res.status(200).json({
            review: review
        })
    })
    .catch(err => console.log(err));
})

module.exports = router