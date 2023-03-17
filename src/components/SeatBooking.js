import React,{useState} from "react";
import SeatPicker from "react-seat-picker";
import { Link, useNavigate,useParams } from "react-router-dom";

import "../styles.css";

function SeatBooking() {
  
  const navigate = useNavigate()
  const {name} = useParams()
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
  const [selectedSeats, setSelectedSeats] = useState([]);
  

  function handleSeatClick(seat,number) {
    setSelectedSeats([...selectedSeats, seat+number]);
    
  }
  function handleConfirmSeats() {
    navigate("/bookmyticket/:name",{
      state: {
        selectedSeats : selectedSeats
      }
      })
  }
 
  return (
    <div>
      <div className="App">
      <h1 className="screen">SCREEN</h1>
      <SeatPicker rows={rows} maxReservableSeats={6} visible alpha  addSeatCallback={handleSeatClick}
        removeSeatCallback={() => console.log('Seat removed')} onSelect={handleSeatClick}/>
      <button onClick={handleConfirmSeats}><Link to={'/bookmyticket/'+name}>Confirm seats</Link></button>
  </div></div>
  )
}

export default SeatBooking