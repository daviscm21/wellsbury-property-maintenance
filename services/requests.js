const fetch = require('node-fetch'); // import node-fetch (enables the fetch API to be used server-side)
const { Pool } = require('pg'); // import node-postgres

const pool = new Pool({ // create connection to database
  connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
  ssl: {
    rejectUnauthorized: false // don't check for SSL cert
  }
});

const findJobs = async (req, res) => {
  const type = req.query.type;  

  const query = 'SELECT * FROM jobs WHERE type = $1'; 

  try{

      const jobs = await pool.query(query, [type]);  
      res.status(201).send({
        status: 'Success',
        data: jobs.rows[0],
        
      })

} catch(err) {
  return res.status(500).send({
    error: err.message
  });
}
}

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

module.exports = { findJobs }