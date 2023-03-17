import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function RecommendedMovies() {
  const [recommendedImages,setRecommendedIamges]=useState([])
 
  useEffect(()=>{
    fetch('http://localhost:3002/movies')
    .then((response)=>  response.json())
    .then((res) => setRecommendedIamges(res))
    .catch((err) => {
      console.log(err.message);
    });
  },[])


  return (
    <div className='yColor'>
      RecommendedMovies
      <br/>
     <div className='slider pt-4'>

      {recommendedImages && recommendedImages.map((item)=>(
        <div key={item.id} >
        {(item.popularity > 5) ? <Link onClick={(e)=>e.stopPropagation()} to={'/moviedetails/'+item.id}><img src={item.poster_path} style={{"height":"150px","width":"200px","paddingRight":"20px"}}/> </Link>: ''}
      </div>
      ))}
      </div>
    </div>
  )
}

export default RecommendedMovies