import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import UpcominMovies from './components/UpcominMovies';
import Events from './components/Events';
import { Provider } from 'react-redux';
import { store } from './store';
import BookMyTicket from './components/BookMyTicket';
import SearchBar from './components/SearchBar';
import TicketConfirmation from './components/TicketConfirmation';
import SearchResults from './components/SearchResults';
import LatestMovies from './components/LatestMovies';
import EventBooking from './components/EventBooking';
import UpcomingMovieDetails from './components/UpcomingMovieDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<App/>}/>
        <Route path='/searchBar' element={<SearchBar/>}/>
        <Route path='/moviedetails/:id' element={<MovieDetails/>}/>
        <Route path='/latestmovies' element={<LatestMovies/>}/>
        <Route path='/upcomingmovies' element={<UpcominMovies/>}/>
        <Route path='/upcomingmoviedetails/:id' element={<UpcomingMovieDetails/>}/>
        <Route path='/searchresults/:title' element={<SearchResults/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/eventbooking' element={<EventBooking/>}/>
        <Route path='/bookmyticket/:name' element={<BookMyTicket/>}/>
        <Route path='/ticketconfirmation' element={<TicketConfirmation/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
