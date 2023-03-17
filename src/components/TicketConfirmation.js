import { useEffect, useState } from "react"; 
import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";

function TicketConfirmation() {
  const {state} = useLocation()
  const {date,showTime,title,selectedSeats} = state
  const [day,setDay]=useState(0)
  let value=' '
  let back = '#FFFFFF'
  let fore = '#000000'
  let size = 256
  useEffect(() => {
   let day = date && date.getDay()
   if(day ===1 ){setDay('Monday')}
   if(day ===2 ){setDay('Tuesday')}
   if(day ===3 ){setDay('Wednesday')}
   if(day ===4 ){setDay('Thursday')}
   if(day ===5 ){setDay('Friday')}
   if(day ===6 ){setDay('Saturday')}
   if(day ===7 ){setDay('Sunday')}
   
  }, [date])
  
  return (
    <div className="app text-center yColor">Booking Confirmation
    <hr/>
      <div className="row d-flex flex-row">
          <QRCode 
            value={value}
            bgColor={back}
            fgColor={fore}
            size={size}
          />
          <br/>
           <div className="cols pt-4">Movie Name : {title}</div>
          <div className="cols pt-2">Show Timings : {showTime}</div>
          <div className="cols pt-4"> Date : {day} {date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</div>
          <div className="cols pt-2">Selected Seats : {selectedSeats.toString()}</div>
      </div>
    </div>
  )
}

export default TicketConfirmation