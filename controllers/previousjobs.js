const fetch = require('node-fetch'); // import node-fetch (enables the fetch API to be used server-side)
const { Pool } = require('pg'); // import node-postgres

const pool = new Pool({ // create connection to database
  connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
  ssl: {
    rejectUnauthorized: false // don't check for SSL cert
  }
});

exports.findJobs = async (req, res) => {
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