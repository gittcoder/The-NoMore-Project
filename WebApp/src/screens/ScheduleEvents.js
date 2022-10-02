import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Calendar from "../components/Calendar";
import DayEvents from "../components/DayEvents";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';



const ScheduleEvents =()=> {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  
    return (
      <div>
        <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
          <div
            className="title"
            style={{ position: "absolute", top: "15%", left: "5%" ,fontSize:"20%"}}
          >
            <Typography variant="h2" component="h4" sx={{ color: "#DA0037" }}>
              EVENTS
            </Typography>
          </div>
          <div
            className="addEvent"
            style={{ position: "absolute", top: "30%", left: "5%" }}
          >
            <Button variant="contained" color="warning" size="large">
              Add Event +
            </Button>
          </div>
          <div style={{ position: "absolute", top: "30%", left: "25%",width:"15%" }}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <MobileDatePicker
          label="Select Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
         </div>
          <div style={{position:"absolute",top:"15%",left:"45%"}}>
          <Calendar changeWidth="90%" changeDay={value} />
          </div>
          <div style={{position:"absolute",top:"45%",left:"5%"}}>
          <DayEvents changeWidth="40%" changeDay={value} />
          </div>
        </Box>
        <Box sx={{ mr: 2, display: { xs: "flex", vs: "flex", md: "none" } }}>
        <div
            className="title"
            style={{ position: "absolute", top: "15%", left: "5%" }}
          >
            <Typography variant="h2" component="h4" sx={{ color: "#DA0037" }}>
              EVENTS
            </Typography>
          </div>
          <div
            className="addEvent"
            style={{ position: "absolute", top: "35%", left: "5%" }}
          >
            <Button variant="contained" color="warning" size="large">
              Add Event +
            </Button>
            
            
         </div>
         <div style={{ position: "absolute", top: "35%", left: "35%" }}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <MobileDatePicker
          label="Select Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
         </div>
          <div style={{position:"absolute",top:"55%",left:"5%"}}>
          <Calendar changeWidth="85%" changeDay={value} />
          </div>
          <div style={{position:"absolute",top:"155%",left:"5%"}}>
          <DayEvents changeWidth="85%" changeDay={value}/>
          </div>
        </Box>
      </div>
    );
  }


export default ScheduleEvents;
