const express = require("express");
const router = express.Router();

const {getReviews, postReview} = require('../controllers/reviews');

router.get('/', getReviews); 
router.post('/', postReview);

module.exports = router;