import {ScheduleComponent,Inject,Agenda,Day,Month,Week,WorkWeek,} from "@syncfusion/ej2-react-schedule";
import { ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";
import React from "react";


class Calendar extends React.Component {
  state = {
    events: [],
    changeDay:new Date(2022,10,15),
    changeWidth:"600px",
    
  };

  // componentDidUpdate()
  // {
  //   console.log("Inside Calendar!!!");
  //   console.log(this.props.events);
  // }
  

  render() {
    const onPopupOpen =(args)=> {
      args.cancel = true;
  }
    return (
      
      <div>
        
        
        <div>
          <ScheduleComponent
            currentView="Week"
            width={this.props.changeWidth}
            height="500px"
            eventSettings={{ dataSource: this.props.events }}
            selectedDate={this.props.changeDay}
            popupOpen={onPopupOpen.bind(this)}
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
