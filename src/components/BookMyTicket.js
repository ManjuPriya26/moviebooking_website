import { useState } from 'react'; 
import '../App.css'
import DatePicker from 'react-date-picker';
import React from "react";
import {useParams ,useNavigate} from 'react-router-dom';
import "../styles.css";
import SeatPicker from "react-seat-picker";




function BookMyTicket() {
  

  const showTime =['12.30 a.m','4.30 p.m','6.00 p.m']
  const [getShowTime,setShowTime] =useState('4.30 p.m');
  const {name} = useParams()
  const [date,setDate] = useState(new Date())
  const navigate = useNavigate()
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [toggleButton,setToggleButton] =useState(false)
    const rows = [
        [ { number: 1 }, { number: 2 }, { number: 3, isReserved: true }, { number: 4 }, { number: 5 },{ number: 6 }, { number: 7 },{number:8}],
        [ { number: 1 }, { number: 2 }, { number: 3}, { number: 4 }, { number: 5 },{ number: 6 }, { number: 7 },{number:8}],
        [ { number: 1 }, { number: 2 }, { number: 3, isReserved: true }, { number: 4,isReserved: true  }, { number: 5 },{ number: 6 }, { number: 7 },{number:8}],
        [ { number: 1 }, { number: 2 }, { number: 3}, { number: 4 }, { number: 5 ,isReserved: true },{ number: 6 }, { number: 7 },{number:8}],
        [ { number: 1 }, { number: 2 }, { number: 3},{ number: 4 },{ number: 5 }, { number: 6 },{ number: 7 },{ number: 8 },{ number: 9 },{ number: 10 }],
        [ { number: 1 }, { number: 2 }, { number: 3},{ number: 4 },{ number: 5 }, { number: 6 ,isReserved: true },{ number: 7 ,isReserved: true },{ number: 8 },{ number: 9 },{ number: 10 }],
        [ { number: 1 }, { number: 2 }, { number: 3, isReserved: true },{ number: 4 },{ number: 5 }, { number: 6 },{ number: 7 },{ number: 8 },{ number: 9 },{ number: 10 }], 
        [ { number: 1 }, { number: 2 }, { number: 3 },{ number: 4 },{ number: 5 }, { number: 6 },{ number: 7 },{ number: 8 },{ number: 9 },{ number: 10 }],
        [ { number: 1 }, { number: 2 }, { number: 3}, { number: 4 ,isReserved: true }, { number: 5 },{ number: 6 }, { number: 7 }, { number: 8 }, { number: 9 },{ number: 10 }, { number: 11 },{number:12}],
        [ { number: 1 }, { number: 2 }, { number: 3}, { number: 4 }, { number: 5 },{ number: 6 }, { number: 7 }, { number: 8 }, { number: 9 },{ number: 10 }, { number: 11 },{number:12}],
        [ { number: 1 }, { number: 2 }, { number: 3, isReserved: true }, { number: 4 ,isReserved: true }, { number: 5 },{ number: 6 }, { number: 7 }, { number: 8 }, { number: 9 },{ number: 10 }, { number: 11 },{number:12}]
  ];
  

  function handleSeatClick(seat,number) {
    setSelectedSeats([...selectedSeats, seat+number]);
    
  }
  function handleConfirmSeats() {
    setToggleButton(!toggleButton)
  }
  
  const handleShowTiming = (item)=>{
    setShowTime(item)
  }
  const finalBooking = ()=>{
    
   
    navigate("/ticketconfirmation",{
    state: {
      date : date,
      showTime : getShowTime,
      title : name,
      selectedSeats : selectedSeats
    }
    })
    }
    function handleSeatSelection (){

      setToggleButton(!toggleButton)
    }
   
  
  return (
    <div className='container app  '>
       
    <div className='text-center yColor'>Book My Ticket</div>
   

        <div className='row border d-flex'><p className='yColor'>Date :</p> <div className='text-black bg-warning'><DatePicker onChange={(e)=>setDate(e)} minDate={new Date()} value={date} clearIcon={null} /></div></div>
        <div className='row border block'>Available Show Timings
        {showTime.map((item)=>
        <div><button onClick={()=>handleShowTiming(item)}>{item}</button></div>
        )}
        </div>
        <div className='row border h-8' ><button style={{"backgroundColor":"black","textAlign":"left","color":"yellow"}} onClick={handleSeatSelection}>Choose No of Seats : {selectedSeats.toString()}</button></div>
       
        {toggleButton && <div className="App">
            <h1 className="screen">SCREEN</h1>
            <SeatPicker rows={rows} maxReservableSeats={6} visible alpha  addSeatCallback={handleSeatClick}
            removeSeatCallback={() => console.log('Seat removed')}/>
            <button onClick={handleConfirmSeats}>Confirm seats</button>
            </div> }
     
        <div className='row border ' ><button className='btn btn-primary' onClick = {finalBooking}>Book</button></div>
       
    </div>
  )
}

export default BookMyTicket
