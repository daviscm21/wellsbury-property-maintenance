import React, { useState, useEffect } from "react";
import {fetchReviews} from '../api/reviews'; 
import ReviewForm from "./reviewform";
import './reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState(''); 

    useEffect(() => {
      fetchReviews().then(fetchedReviews => setReviews(fetchedReviews.data))
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
            {reviews && reviews.map((review, index) => {return <div key={index} className='review'>
                   <h3>{review.title}</h3>
                   <p>{review.review}</p>
                   <h4>{review.firstname} {review.surname}</h4>
                   {starsLoop(review.stars)}                  
               </div>})
               }

              </div>            
               <ReviewForm setReviews={setReviews}/>
            </div>

        )
    }


export default Reviews; 