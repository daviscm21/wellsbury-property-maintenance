import {fetchReviews, postReview} from '../api/reviews'; 
import React, { useState } from "react";
import './reviewform.css';

const ReviewForm = (props) => {
const [review, setReview] = useState(''); 
const [title, setTitle] = useState(''); 
const [firstname, setFirstname] = useState(''); 
const [surname, setSurname] = useState('')
const [stars, setStars] = useState(''); 

const onAddNewReview = (e) => {
e.preventDefault(); 

postReview(title, review, stars, firstname, surname); 
fetchReviews().then(fetchedReviews => props.setReviews(fetchedReviews))
}

        return (
            <div className='reviewform'>
              <h2>Leave a Review:</h2>
              <form onSubmit={onAddNewReview}>
                <label htmlFor='review'>Review:</label>
                <textarea id='review' name='review' required onChange={(e) => {setReview(e.target.value);}}></textarea>
                <br></br>
                <label htmlFor='title'>Review Title:</label>
                <input type='text' id='title' name='title' required onChange={(e) => {setTitle(e.target.value);}}></input>
                <br></br>
                <label htmlFor='firstname'>First Name:</label>
                <input type='text' id='firstname' name='firstname' required onChange={(e) => {setFirstname(e.target.value);}}></input>
                <br></br>
                <label htmlFor='surname'>Surname:</label>
                <input type='text' id='surname' name='surname' required onChange={(e) => {setSurname(e.target.value);}}></input>
                <br></br>
                <label htmlFor='stars'>Stars:</label>
                <input type='number' min='1' max='5' id='stars' required name='stars' onChange={(e) => {setStars(e.target.value);}}></input>
                <input type='submit'></input>
              </form>
            </div>
        )
    }


export default ReviewForm; 