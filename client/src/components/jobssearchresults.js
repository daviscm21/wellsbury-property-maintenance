import React from 'react';
import './jobssearchresults.css'; 

const JobsSearchResults = (props) => {
  

        return (
            <div className='jobssearchresults'>
              {props.previousJobs && 
                  <div className='jobssearchresult'>
                    <img src={props.previousJobs.image} alt={props.previousJobs.name}></img>
                    <h3>{props.previousJobs.name}</h3>
                    <p>{props.previousJobs.description}</p>
                  </div>
              }
            </div>
        )
    }


export default JobsSearchResults; 