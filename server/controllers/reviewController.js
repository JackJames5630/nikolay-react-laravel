const asyncHandler = require("../middleware/asyncHandler");
const Review = require("../models/reviewModel");
const fs = require('fs')
const createReview = asyncHandler(async (req, res) => {
  
  const file = `/uploads/${req.file.filename}`
  console.log(file)
  const { type, name, position,content} = req.body;

  const review = await Review.create({type, file, name, position,content});

  if (review) {
    res.status(201).json({
        _id: review._id,
        type:review.type,
        photo: review.file,
        name: review.name,
        position: review.position,
        content: review.content
    });
  } else {
    res.status(400);
    throw new Error("Invalid review data");
  }
});

const getReviews = asyncHandler(async (req, res) => {
  const review = await Review.find({});
  res.status(200).json(review);
});

const getReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (review) {
    res.status(200).json({
        _id: review._id,
       type:review.type,
        photo: review.photo,
        name: review.name,
        position: review.position,
        content:review.content
    });
  } else {
    res.status(404);
    throw new Error("review not found");
  }
});

const getReviewByID = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404);
    throw new Error("review not found");
  }
});

const deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review) {
    await Review.deleteOne({ _id: review._id });
    res.status(200).json({ message: "review deleted successfully" });
  } else {
    res.status(404);
    throw new Error("review not found");
  }
});

module.exports= {createReview, getReviews, getReviewByID, getReview,deleteReview};
