import React from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid} from '@mui/material/';
import { Fade } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Footer from "../components/Footer.jsx"
import emptyClass from '../utils/emptyClass.json'
import ClassDisplay from "./ClassDisplay.jsx"
import "../designs/EmptyClassCss.css"

  const days = [{value: 0,label: 'Monday',},
    {value: 1,label: 'Tuesday',},
    {value: 2,label: 'Wednesday',},
    {value: 3,label: 'Thursday',},
    {value: 4,label: 'Friday',},
  ];

  const buildings = [{value: 0,label:'SJT',},
    {value: 1,label: 'TT',},
    {value: 2,label: 'SMV',},
    {value: 3,label: 'MGB',},
    {value: 4,label: 'MB',},
    {value: 5,label: 'CBMR',},
    {value: 6,label: 'CDMM',},
    {value: 7,label: 'GDN',},
    {value: 8,label: 'PLB',},
    {value: 9,label: 'PRB',},
  ];


  const times = [{value: 0,label: '8:00 A.M to 9:00 A.M',},
    {value: 1,label: '9:00 A.M to 10:00 A.M',},
    {value: 2,label: '10:00 A.M to 11:00 A.M',},
    {value: 3,label: '11:00 A.M to 12:00 P.M',},
    {value: 4,label: '12:00 P.M to 1:00 P.M',},
    {value: 5,label: '2:00 P.M to 3:00 P.M',},
    {value: 6,label: '3:00 P.M to 4:00 P.M',},
    {value: 7,label: '4:00 P.M to 5:00 P.M',},
    {value: 8,label: '5:00 P.M to 6:00 P.M',},
    {value: 9,label: '6:00 P.M to 7:00 P.M',},
  ];
  

const EmptyClass =()=>{
  const [day, setDay] = React.useState(1);
  const [nav, setNav] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(true);


  
  const EmptyClasses=()=>{
    const cl1= emptyClass[0][day];
    const cl2 = cl1[time];
    const classes = cl2[building];
    const todo_list = classes.length?(

      <div className="grid-container-class">
        {classes.map((classemp) => {
          
            return(
                <div className="collection-item" key={classemp}  >
                 
                 
                 <ClassDisplay cname={classemp} />

                 
                 
                </div>
                );
        })}
        </div>

    )
    :(
        <p className="center">You have no events left !!</p>
    )
    return(
        <div className="events collection">
            {todo_list}
        </div>
    )

        

  }


  const handleNavChange = (event) => {
    setIsChecked(!isChecked);
    if(nav===false)
    setNav(true);
    else
    setNav(false);
  };
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const [building, setBuilding] = React.useState(0);

  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
  };

  const [time, setTime] = React.useState(0);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  
 
    return (
        <div>
          <div style={{position:"absolute",top:"15%",left:"25%"}}>
        

          <Fade in={isChecked} >


    <Grid
        className="entry"
        container
        sx={{
          width: "70vw",
          height: "120vh",
        }}
      >
        <Card
          sx={{
            width: {
              xs: "70%",
              sm: "70%",
              md: "80%",
              lg: "70%",
            },
            height: "60%",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 20px rgb(30,30,30)",
          }}
        >
        <CardContent>
        <Typography sx={{ fontSize: 40 , }} color="text.secondary" gutterBottom>
          Empty Class
        </Typography>
        <div >
        <TextField
          id="filled-select-currency"
          select
          label="Select Day"
          value={day}
          onChange={handleDayChange}
          
          variant="filled"
          sx={{
            width: "38vw",
            height: "120vh",
            position:"absolute",
            top:"15vh",
            left:"3vw",
          }}
        >
          {days.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div >
        <TextField
          id="filled-select-currency"
          select
          label="Select Time"
          value={time}
          onChange={handleTimeChange}
          variant="filled"
          
          sx={{
            width: "38vw",
            height: "120vh",
            position:"absolute",
            top:"30vh",
            left:"3vw",
          }}
        >
          {times.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div >
        <TextField
          id="filled-select-currency"
          select
          label="Select Building"
          value={building}
          onChange={handleBuildingChange}
          
          variant="filled"
          sx={{
            width: "38vw",
            height: "120vh",
            position:"absolute",
            top:"45vh",
            left:"3vw",
          }}
        >
          {buildings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div>
          <Button variant="contained" onClick={handleNavChange}
          sx={{
            width: "38vw",
            height: "6vh",
            position:"absolute",
            top:"57vh",
            left:"3vw",
          }}>
            Show Results</Button>
        </div>
        </CardContent>
        </Card>
      </Grid>
      </Fade>

    </div>
    <div style={{position:"absolute",top:"120%"}}>
    <Footer/>
    </div>
          {/* <ShowResults navigate={{nav:nav}} ></ShowResults> */}
          <Fade in={nav}>
                    <Grid
                        className="entry"
                        container
                        sx={{
                        width: "100vw",
                        height: "100vh",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "black",
                        }}

                    >
                        <Card
                        sx={{
                            width: {
                            xs: "70%",
                            sm: "70%",
                            md: "80%",
                            lg: "60%",
                            },
                            height: "60%",
                            borderRadius: "1.5rem",
                            boxShadow: "0 10px 20px rgb(30,30,30)",
                            padding:"20px",
                            position:"absolute",
                            
                        }}
                        >
                        <CardContent className="available-class-pop">
                        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom >
                        Available Classes
                        </Typography>
                        <div style={{ flex: "1",overflowY:"scroll",height:"20%"}}>
                        {EmptyClasses()}
                        </div>
                            <Button variant="contained" onClick={handleNavChange}
                               sx={{
                                width: "30%",
                                height: "6vh",
                                position:"absolute",
                                margin:"20px",
                                top:"45vh",
                                left:"20vw",
                            }}>Back</Button>
                        </CardContent>
                        </Card>
                    </Grid>
                    </Fade>
                    
        </div>
    );
  }


export default EmptyClass;