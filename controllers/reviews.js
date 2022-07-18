const { Pool } = require('pg/lib');
const pool = require('../models/database');

exports.getReviews = async (req, res) => {

    const query = 'SELECT * FROM reviews ORDER BY id DESC LIMIT 3'; 

    try{

        const reviews = await pool.query(query);  
        res.status(201).send(reviews.rows)

  } catch(err) {
    return res.status(500).send({
      error: err.message
    });
  }
  }

  let reviewIdCounter = 4; 

  exports.postReview = async (req, res) => {
      const {title, review, stars, firstname, surname} = req.body; 
      const query = 'INSERT INTO reviews (id, title, review, stars, firstname, surname) VALUES ($1, $2, $3, $4, $5, $6)'; 
  
    try{

      let id = reviewIdCounter++;  
      
      const newReview = await pool.query(query, [id, title, review, stars, firstname, surname]);
 
      res.status(201).send({
        status: 'Success',
        message: 'New review posted',
        data: newReview.rows[0],
        })
    } catch(err) {

      return res.status(500).send({
        error: err.message
      });
    }
  }
