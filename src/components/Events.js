import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useGetAllEventsQuery} from '../services/MovieApiService'

function Events() {
  const {data} = useGetAllEventsQuery()
  const navigate = useNavigate()
  function handleEventBooking (name,date,time,venue){
    
    navigate('/eventbooking',{
     state:{ 
      name : name,
      date:date,
      time:time,
      venue:venue
     }
    })
  }
  
  return (
    <div className='app yColor'><h3>Events</h3>
    {data && data.map((item)=>(
      <div key={item.id} className='card bColor'>
        <div  className='card-body'>
          <div className='card-title border bg-warning'>{item.event_type}</div>
          <div className='card-text'>Event Name : {item.event_name}</div>
          <div className='card-text'>Date : {item.date}</div>
          <div className='card-text'>Time : {item.time}</div>
          <div className='card-text'>Venue : {item.venue}</div>
          <div className='card-text'>Tickets Available : {item.number_of_tickets}</div>
          <button onClick={()=>handleEventBooking(item.event_name,item.date,item.time,item.venue)}>Book</button>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Events