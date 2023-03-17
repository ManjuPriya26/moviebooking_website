import React from 'react'
import {  useLocation } from 'react-router-dom'

function EventBooking() {
    const {state} = useLocation()
    const {name,date,time,venue} =state
   
  return (
    <div className='app'>
    <div className='bg-secondary text-center yColor'>Thanks for Booking</div>
    <br/>
       { state && 
        <div className='bg-primary yColor'>
        <div className='text-center yColor'>Booking Details</div><div >Event Name: {name}</div>
        <div >Date : {date}</div>
        <div >Time : {time}</div>
        <div >Venue : {venue}</div>
        </div>
        }
       
    
    </div>
  )
}

export default EventBooking