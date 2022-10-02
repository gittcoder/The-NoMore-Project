import React, { Component } from 'react';
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid} from '@mui/material/';
import { Divider } from '@mui/material';
import { Fade } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  ></Box>)


  const days = [{value: 'mon',label: 'Monday',},
    {value: 'tue',label: 'Tuesday',},
    {value: 'wed',label: 'Wednesday',},
    {value: 'thu',label: 'Thursday',},
    {value: 'fri',label: 'Friday',},
  ];

  const buildings = [{value: 'mon',label: 'Monday',},
    {value: 'tue',label: 'Tuesday',},
    {value: 'wed',label: 'Wednesday',},
    {value: 'thu',label: 'Thursday',},
    {value: 'fri',label: 'Friday',},
  ];

  const times = [{value: 'mon',label: 'Monday',},
    {value: 'tue',label: 'Tuesday',},
    {value: 'wed',label: 'Wednesday',},
    {value: 'thu',label: 'Thursday',},
    {value: 'fri',label: 'Friday',},
  ];
  

const EmptyClass =()=>{
  const [day, setDay] = React.useState('mon');
  const [nav, setNav] = React.useState(false);
  const handleNavChange = (event) => {
    if(nav==false)
    setNav(true);
    else
    setNav(false);
  };
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const [building, setBuilding] = React.useState('mon');

  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
  };

  const [time, setTime] = React.useState('mon');

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  
 
    return (
        <div>
          <div style={{position:"absolute",top:"15%",left:"5%"}}>
          <Fade in={true}>
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
                            lg: "70%",
                            },
                            height: "60%",
                            borderRadius: "1.5rem",
                            boxShadow: "0 10px 20px rgb(30,30,30)",
                            position:"absolute",
                            
                        }}
                        >
                        <CardContent>
                        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                        Available Classes
                        </Typography>
                            <Button variant="contained" onClick={handleNavChange}
                               sx={{
                                width: "38vw",
                                height: "6vh",
                                position:"absolute",
                                top:"45vh",
                                left:"14vw",
                            }}>
                                Back</Button>
                        </CardContent>
                        </Card>
                    </Grid>
                    </Fade>
        </div>
    );
  }


export default EmptyClass;