const Campground = require('../models/campground')
const Review = require('../models/review')
const ExpressError = require('../utils/ExpressError')

module.exports.postReview = async (req, res, next) => {
    const camp = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    review.author = req.user._id
    camp.reviews.push(review)
    review.save();
    camp.save()
    console.log(camp)
    res.redirect(`/campgrounds/${camp._id}`)
}

module.exports.deleteReview = async (req, res) => {
    const camp = await Campground.findById(req.params.id)
    const review = await Review.findByIdAndDelete(req.params.reviewId)
    camp.reviews.pull(review)
    camp.save();
    req.flash('success', 'Review has been deleted')
    res.redirect(`/campgrounds/${camp._id}`)
}