import React, { useState, useEffect } from "react";
import {fetchReviews} from '../api/reviews'; 
import ReviewForm from "./reviewform";
import './reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState(''); 

    useEffect(() => {
      fetchReviews().then(fetchedReviews => setReviews(fetchedReviews))
    }, [])

    const starsLoop = (num) => {
      let stars = []; 
      for(let i=0; i<num; i++){
       stars.push(<span key={i}>&#9733;</span>)
      };
      for(let i=0; i<(5-num); i++){
        stars.push(<span key={(5-i)}>&#9734;</span>)
       }; 
      return stars; 
      
    }

        return (
            <div className='reviews-section'>
            <h2 className='reviews-header'>Reviews:</h2>  
            <div className='reviews'>
               

              </div>            
               <ReviewForm setReviews={setReviews}/>
            </div>

        )
    }


export default Reviews; 