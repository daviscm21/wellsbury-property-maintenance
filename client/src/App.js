import React, { useState }  from 'react'; 
import JobsSearchBar from './components/jobssearchbar';
import JobsSearchResults from './components/jobssearchresults';
import Reviews from './components/reviews'
import { getJobs } from './api/previousjobs';
import './App.css';

function App () {

const [previousJobs, setPreviousJobs ] = useState(''); 

const search = async (type) => {
   getJobs(type).then((res) => {
           
    setPreviousJobs(res.data.data)
 });  
}

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Catamaran:600|Merriweather+Sans:300&display=swap" rel="stylesheet"></link>
      <h1>WPM</h1>
      <h2 className='wpm'>Wellsbury Property Maintenance</h2>
      <div className='about'>
      <p className='about-text'>WPM is the leading property maintenance contractor in the Wellsbury area and having been established for over 40 years, we have expertise in a range of different areas. No job is too small or too big, just call our office and our team will be happy to guide you through the process from the initial free quote up to completion.</p>
      <img className='workmen-img' alt='workmen figurines' src='https://cdn.pixabay.com/photo/2018/01/20/08/01/craftsmen-3094035__340.jpg'></img>
      </div>
      <JobsSearchBar search={search}/>
      <JobsSearchResults previousJobs={previousJobs}/>     
      <Reviews />
      <footer>Charles Davis Web Development 2022</footer>
    </div>
  );

}

export default App;
