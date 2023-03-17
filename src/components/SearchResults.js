import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useGetAllMoviesQuery } from "../services/MovieApiService";

function SearchResults() {
    const {title}=useParams()
    const {data} = useGetAllMoviesQuery()
    const [searchResult,setSearchResult] = useState()
   
   useEffect(() => {
    setSearchResult(data && data.filter((item)=>(item.title.toString()).toLowerCase() ===title.toString().toLowerCase()))
   }, [data])
   console.log(searchResult)
   
  return (
    <div className='slider flex-column pt-4 app'>
                 <div className= 'text-center yColor'><h1>Movie Details</h1></div>
                 {searchResult && searchResult.map((item)=> (
                    <div key={item.id} className='border'>
                  
                    <div className='text-center'><Link  to={'/moviedetails/'+item.id} >Click on Image to Book  <img src={item.poster_path}  style={{"height":"150px","width":"150px","justifyContent":"center"}}/></Link></div>
                    <div style={{"height":"150px","color":"brown"}} className="border text-center"><h1>{item.title}</h1><br/><h2>{data.release_date}</h2></div>
                    <div style={{"height":"150px","color":"brown"}} className="border text-center"><h2>Movie Duration <br/> {item.runtime}</h2></div>
                    <div style={{"height":"150px","color":"brown"}} className="border text-center"><h2>Ratings <br/> {item.popularity}</h2></div>
               
                
                </div>
                 ))}

                 {!searchResult &&
                  <div>
                   <p> No Data Found</p>
                </div>}
                 
                
                 </div>
  )
}

export default SearchResults