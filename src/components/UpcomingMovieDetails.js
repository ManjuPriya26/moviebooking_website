import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import { useGetMovieByIdQuery } from '../services/MovieApiService'

function UpcomingMovieDetails() {
    const {id} = useParams()

    const {data}= useGetMovieByIdQuery(id) 
   
  return (
   

   
    <div className='container app'>

       { data && 
            <div className='row border'>
                <div className='cols border text-center yColor'><h1>Upcoming Movie Details</h1></div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 h-50'>
                  
                    <img src={data.poster_path}  style={{"height":"350px","width":"350px"}}/>
                
                </div>
                <div className="col-lg-8 col-md-8 col-sm-3 col-xs-8 border">

                    <div style={{"height":"150px","color":"yellow"}} className="border text-center pt-4"><h1>{data.title}</h1><br/><h2>{data.release_date}</h2></div>
                    <div style={{"height":"150px","color":"yellow"}} className="border text-center pt-4"><h2>Movie Duration <br/> {data.runtime}</h2></div>
                    <div style={{"height":"150px","color":"yellow"}} className="border text-center pt-4"><h2>Ratings <br/> {data.popularity}</h2></div>
                </div>
                </div>
        }
        
       </div> 
        
   
  )
}

export default UpcomingMovieDetails