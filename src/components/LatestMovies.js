import { useGetAllMoviesQuery } from "../services/MovieApiService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function LatestMovies (){
    const {data} = useGetAllMoviesQuery()
    const [searchResult,setSearchResult] = useState()
   
    
   useEffect(() => {
    
    setSearchResult(data && data.filter((item)=>(
        (item.status.toString().toLowerCase() === 'released')
        ) ))
        
    }, [data])

    console.log(data)
   
    return(
        <div className="app yColor">
        <h2 className="text-center">Latest Movies</h2>
       <div className="d-flex flex-row" >

    {searchResult && searchResult.map((item)=>(
        <div key={item.id} >
        {<Link onClick={(e)=>e.stopPropagation()} to={'/moviedetails/'+item.id}><img src={item.poster_path} style={{"height":"150px","width":"200px","paddingRight":"20px"}}/> </Link>}
      </div>
      ))}
         </div>
    </div>
    )
}
export default LatestMovies