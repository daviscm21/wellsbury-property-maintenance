import React, { useState, useEffect } from "react";
import './jobssearchbar.css';

const JobsSearchBar = (props) => {
  const [type, setType] = useState('showers-baths'); 

  useEffect(() => {
    props.search(type)   
  }, [])

  const onClick = async () => {
    props.search(type)
  }; 

          return(
              <div className='previousjobs'> 
                <h2>Previous Work:</h2>
                <p>Search our previous jobs below:</p>
                    <div>
                    <label htmlFor='type'>Type:</label>
                    <select id='type' name='type' onChange={(e) => {setType(e.target.value);}}>
                       <optgroup label='Plumbing'>
                         <option value='showers-baths'>Showers & Baths</option>
                         <option value='toilets'>Toilets</option>
                         <option value='radiators'>Radiators</option>
                       </optgroup>
                       <optgroup label='Electrics'>
                         <option value='lighting'>Lighting</option>
                         <option value='fuse-box'>Fuse Box</option>
                         <option value='ev-charger'>EV Charger</option>
                       </optgroup>
                       <optgroup label='Building & Roof'>
                         <option value='paving'>Paving</option>
                         <option value='flooring'>Flooring</option>
                         <option value='roof'>Roof</option>
                       </optgroup>
                       <optgroup label='Painting & Decorating'>
                         <option value='painting'>Painting</option>
                         <option value='wallpaper'>Wallpapering</option>
                         <option value='exterior-painting'>Exterior Painting</option>
                       </optgroup>                       
                    </select>                  
                    </div>
                    <button type='submit' value='Search' onClick={onClick}>Search</button>
              </div>

        )
    }

export default JobsSearchBar ;