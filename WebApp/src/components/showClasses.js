import {React,Component} from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid} from '@mui/material/';
import { Fade } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Footer from "../components/footer/Footer.jsx"
import emptyClass from '../utils/emptyClass.json'





class showClasses extends Component

{

    state={
        day:0,
        time:0,
        building:0,
    }

render(){

    const EmptyClasses=(day,time,building)=>{
    
        const classes  = emptyClass[day][time][0][building]
        const todo_list = classes.length?(
            classes.map((event) => {
              
                return(
                    <div className="collection-item" key={event}>
                     {event}
                    </div>
                    )
            })
        ):(
            <p className="center">You have no events left !!</p>
        )
        return(
            <div className="events collection">
                {todo_list}
            </div>
        )
    
            
    
      }
    
    

    return(
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
 {EmptyClasses(this.state.day,this.state.time,this.state.building)}
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
</Grid>)

    }}


    export default showClasses;