
import React from 'react';
import ResponsiveAppBar from './screens/NavBar';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import ScheduleEvents from './screens/ScheduleEvents'
// import About from './screens/About';
// import Home from './screens/Home';
// import SportsBook from './screens/SportsBook';
// import CabShare from './screens/CabShare';
// import EmptyClass from './screens/EmptyClass';
// import LoginSignUp from './screens/LoginSignUp';
// import {useState, useEffect, useContext } from 'react';
// import AuthContext from "./utils/AuthContext";
// import EventsForm from "./components/EventsForm"

 function App()
{
//   const events = [];
// try{
//   const LOGIN_URL = 'http://localhost:3500/GetEvents?u=test&p=test';
// const response = await axios.get(LOGIN_URL);
// // console.log(response.data.events);
// var str = response.data.events;
// var strLines = str.split("\n");
// // console.log(strLines)


// for (var i in strLines) {
// var obj = JSON.parse(strLines[i]);
// obj.StartTime=eval("("+obj.StartTime+")");
// obj.EndTime=eval("("+obj.EndTime+")");
// // console.log(obj);
// events.push(obj);

// }

// dispatchEvent(events);


//   }
//   catch(e){}
    return (
    <div
       className="App">
        <header className="App-header"  >
        {/* style={{ backgroundColor: `url(${bg})`}} */}
        <ResponsiveAppBar/>
        
      </header>
    </div>
  );

}

export default App;