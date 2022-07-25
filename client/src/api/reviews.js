import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const baseUrl = 'reviews'; 

export const fetchReviews = async () => {
  const request = axios.get(`${baseUrl}`)
  return request.then(response => response.data)

    }

export const postReview = async (title, review, stars, firstname, surname) => {
  const request = axios.post(baseUrl, {title, review, stars, firstname, surname})
  
  return request.then(response => {
    console.log('this got sent back from the backend', response)
    return response.data
  })
 
 }; 