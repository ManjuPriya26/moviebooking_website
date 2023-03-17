
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import SearchBar from './components/SearchBar';
import MovieSlider from './components/MovieSlider';
import RecommendedMovies from './components/RecommendedMovies';
import MovieDetails from './components/MovieDetails';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='app yColor' >
      <div><SearchBar/></div>
      <br/>
      <hr/>
        <div className='row'>
            <div className='cols col-xl-4 border bt-2 text-center '>
            <Link to='/latestmovies' className="yColor">Latest Movies</Link> </div>
            <div className='cols col-xl-4 border text-center'>
              <Link to='/upcomingmovies' className="yColor">Upcoming Movies</Link></div>
            <div className='cols col-xl-4 border text-center'><Link to='/events' className="yColor"> Events</Link></div>
        </div>
        <div className='text-center border basicContainer'><MovieSlider/></div>
        <div className='text-center border basicContainer'><RecommendedMovies/></div>
        <MovieDetails/>
    </div>
  );
}

export default App;
