import {ScheduleComponent,Inject,Agenda,Day,Month,Week,WorkWeek,} from "@syncfusion/ej2-react-schedule";
import { ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

class Calendar extends React.Component {
  state = {
    data: [
      {
        Id: 1,
        Subject: "Explosion of Betelgeuse Star",
        StartTime: new Date(2018, 1, 15, 9, 30),
        EndTime: new Date(2018, 1, 15, 11, 0),
      },
      {
        Id: 2,
        Subject: "Thule Air Crash Report",
        StartTime: new Date(2018, 1, 12, 12, 0),
        EndTime: new Date(2018, 1, 12, 14, 0),
      },
      {
        Id: 3,
        Subject: "Blue Moon Eclipse",
        StartTime: new Date(2018, 1, 13, 9, 30),
        EndTime: new Date(2018, 1, 13, 11, 0),
      },
      {
        Id: 4,
        Subject: "Meteor Showers in 2018",
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30),
      },
    ],
    changeDay:new Date(2018,1,15),
    changeWidth:"600px",
  };

  render() {
    return (
      
      <div>
        
        
        <div>
          <ScheduleComponent
            currentView="Week"
            width={this.props.changeWidth}
            height="500px"
            eventSettings={{ dataSource: this.state.data }}
            selectedDate={this.props.changeDay}
          >
            <ViewsDirective>
              <ViewDirective
                option="Day"
                startHour="08:00"
                endHour="18:00"
              ></ViewDirective>
              <ViewDirective option="Week"></ViewDirective>
              <ViewDirective option="Month"></ViewDirective>
              <ViewDirective option="Agenda"></ViewDirective>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
        
      </div>
    );
  }
}

export default Calendar;
