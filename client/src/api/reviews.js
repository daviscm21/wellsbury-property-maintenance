import { API_ENDPOINT } from ".";

export const fetchReviews = async () => {

     const res = await fetch(`${API_ENDPOINT}/reviews`)
     const reviews = await res.json(); 
     return reviews; 

    }

export const postReview = async (title, review, stars, firstname, surname) => {

     const res = await fetch(`${API_ENDPOINT}/reviews`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           title, 
           review, 
           stars,
           firstname, 
           surname, 
         }) 
       });
 
 }; 