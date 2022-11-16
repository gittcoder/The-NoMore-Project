import React from "react";
import football from "../images/sports-football-icon-25.png";
import calendar from "../images/calendar-icon-png-4.png";
import cab from "../images/car-picnic-travel-car-vector-png-red-transparent.png";
import classroom from "../images/pngtree-work-from-home-with-girl-working-with-laptop-computer-for-business-png-image_2225853.jpg";
import {Link} from 'react-router-dom';
function DivTwo(){
return(
<div className="twodiv-front">
    
<div className="grid-container-front">
  <div className="item1-front grid-item-front">
    <img src={football} className="frontpageimg-front footballc-front" alt=""></img>
    <Link to="/SportsBook" style={{textDecoration:"none",color:"white"}}>Book Sports Facility
so you don’t have to wait to play your favourite sport</Link>
  
  </div>
  <div className="item2-front grid-item-front">
  <img src={calendar} className="frontpageimg-front" alt=""></img>

  <Link to="/ScheduleEvents" style={{textDecoration:"none",color:"white"}}>  Schedule Events / View all coming up events so you don't miss out .</Link>
  
  </div>
  <div className="item3-front grid-item-front">
  <img src={classroom} className="frontpageimg-front" alt=""></img>

   <Link to="/EmptyClass" style={{textDecoration:"none",color:"white"}}>Find an Empty classrom to complete pending work or have a break.</Link>
  
  </div>  
  <div className="item4-front grid-item-front">
    <img src={cab} className="frontpageimg-front" alt=""></img>
  
<Link to="/CabShare" style={{textDecoration:"none",color:"white"}}>Share Cabs.
It’s a long ride without 
pals coming along.</Link>
  </div>

</div>
</div>
);
}

export default DivTwo;