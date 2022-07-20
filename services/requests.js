const { Pool } = require('pg'); // import node-postgres
require('dotenv').config(); 

if(process.env.DATABASE_URL)
{var pool = new Pool({ // create connection to database
  connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
  ssl: {
    rejectUnauthorized: false // don't check for SSL cert
  }
})
}
else {
var pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
} 



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

const getReviews = async (req, res) => {

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

const postReview = async (req, res) => {
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

module.exports = { findJobs, getReviews, postReview }