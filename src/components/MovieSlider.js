import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import {faArrowAltCircleLeft,faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

function MovieSlider() {
  const [movieImageSlider,setMovieImageSlider]=useState([])
 
  useEffect(()=>{
    axios.get('http://localhost:3002/movies')
    .then(response=>setMovieImageSlider(response.data))
    .then(console.log(movieImageSlider))
    
  },[])


  return (
    <div style={{"height":"50px"}}>
      MovieSlider
      <br/>
      <br/>

      <div className='slider' >

      <FontAwesomeIcon className='left-arrow' icon={faArrowAltCircleLeft} ></FontAwesomeIcon>
      
      {movieImageSlider && movieImageSlider.map((item)=>(
        <img src={item.poster_path}  style={{"height":"150px","width":"200px","overflow":"auto","padding-right":"20px"}}/>
         
        ))}
        
      <FontAwesomeIcon className='right-arrow' icon={faArrowAltCircleRight}></FontAwesomeIcon>
        </div>
      </div>
  )
}

export default MovieSlider