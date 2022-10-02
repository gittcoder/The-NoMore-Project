import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>

          <h2>Home</h2>
          
          <Link to={'/ScheduleEvents'} className="nav-link">Schedule Events</Link>
          <br></br>
          <Link to={'/EmptyClass'} className="nav-link">Empty Class</Link>
        </div>
    );
  }
}

export default Home;