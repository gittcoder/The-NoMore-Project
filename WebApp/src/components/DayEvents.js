import {ScheduleComponent,Inject,Agenda,Day,Month,Week,WorkWeek,} from "@syncfusion/ej2-react-schedule";
import { ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";
import React from "react";



class DayEvents extends React.Component 
{
  state = {
    data: [],
    changeDay:new Date(2018,1,15),
  };

  render() {
    const onPopupOpen =(args)=> {
      args.cancel = true;
  }
    return (
      
      <div>
        <div>
          <ScheduleComponent
            width={this.props.changeWidth}
            eventSettings={{ dataSource: this.props.events }}
            selectedDate={this.props.changeDay}
            popupOpen={onPopupOpen.bind(this)}
          >
            <ViewsDirective>
              <ViewDirective option="Agenda"></ViewDirective>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
    );
  }
}

export default DayEvents;
