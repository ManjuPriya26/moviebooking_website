import { useState } from "react";
import { Link} from "react-router-dom";


function SearchBar(){

  
    const [isSubmit,setSubmit] = useState(false)
    const [searchValue,setSearchValue] =useState()
  
    const searchMovieResults = ()=>{
        
        setSubmit(!isSubmit)
        
    }

    return (
       
            <div style={{"float":"right"}}>
                <input type="text" placeholder="Search..." onChange={(e)=>setSearchValue(e.target.value)}/>
                <button type="submit" onClick={searchMovieResults}><Link className="bColor" to={'/searchresults/'+searchValue}>Submit</Link></button> 
            </div>
    
       
    )
}
export  default SearchBar;