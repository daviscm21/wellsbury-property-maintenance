const express = require("express");
const router = express.Router();

const {findJobs} = require('../controllers/previousjobs'); 

router.get('/', findJobs); 

module.exports = router;