
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {React,Component} from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid} from '@mui/material/';
import { Fade } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import MenuItem from '@mui/material/MenuItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';
import Box from "@mui/material/Box";

const fare = [{value: 'Never',label: 'Never',},
{value: 'Daily',label: 'Daily',},
{value: 'Weekly',label: 'Weekly',},
{value: 'Monthly',label: 'Monthly',},
{value: 'Yearly',label: 'Yearly',},
];

const type = [{value: 'public',label: 'public',},
{value: 'private',label: 'private',}
];


class AddCab extends Component 
{
    state={
        cfade:false,
        fade:true,
        fare:0,
        title:"",
        loc:"",
        date: new Date(),
        time: new Date(),
        description:"",
        loggedIn:false,
        md:"none",
        sx:"none",
        redirect:"flex",
        checked:false,
        dest:"",
        id:0,
        events:[],

    }

    componentDidMount()
    {
      const {events} =this.props;
        this.setState({events:events});
        console.log(this.props);
        this.setState({loggedIn:this.props.loggedIn})
        if(this.state.loggedIn===true)
        {
          this.setState({md:"flex",redirect:"none"});
        }
    }

    
  componentDidUpdate()
  {
    if(this.props.loggedIn===true&&this.state.checked===false)
    {
      this.setState({md:"flex",sx:"flex",redirect:"none",checked:true});
    }
    else if(this.props.loggedIn===false&&this.state.checked===true)
    {
      this.setState({md:"none",sx:"none",redirect:"flex",checked:false});
    }
  }

    
    render()
    {
        const fade=true;
        const handleSubmit = () => {
            // if(fade===false)
            // fade=true;
            // else
            // fade=false;
            window.open('/ScheduleEvents');
          };
          const handleAddEvent=async ()=>{
            const newStart = this.state.date.toString();
            const newEnd = this.state.time.toString();
            const id=this.props.events.length+1;
            console.log(newStart);
            const event = {
              id:this.state.events.length,
              fare:this.state.fare,
              date:this.state.date,
              time:this.state.time,
              dest:this.state.dest,
              owner:this.state.owner,
            }
           // setTimeout(()=>{this.props.addEvent(this.state.events)},100);
           console.log(event);
           this.props.addEvent(event);
           try{
            
          const d = new Date(this.state.date.toString());
          const newStart1="new Date("+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"-"+d.getHours()+"-"+d.getMinutes()+")";
          const d1 = new Date(this.state.time.toString());
          const newEnd1="new Date("+d1.getFullYear()+"-"+d1.getMonth()+"-"+d1.getDate()+"-"+d1.getHours()+"-"+d1.getMinutes()+")";
          console.log(d1);
          const even = JSON.stringify(event);
          const eve=JSON.parse(even);
          console.log(event);
          eve.StartTime=newStart1;
          eve.EndTime=newEnd1;  
          // console.log(eve);
          var str = JSON.stringify(eve);
            str=str.slice(1,str.length-1);
            var paras = str.split(",");
            var x=LOGIN_URL;
            
           
            for(var i in paras)
            {
              str=paras[i].split(":");
              x=x+'&'+str[0]+'='+str[1]
            }
            x=x.replaceAll("\"","");
            console.log(x);
            
             const response = await axios.get(x,
              {headers:{
              'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',}});
             if(response.data.status=="Success")
             {
                console.log("Lets GOOOOO!!!!!");
             }
          //    console.log(response);
            }
            catch(e){
              console.log(e);
            }
           this.setState({addEvent:false});
           this.setState({eventAdded:true});
          //  console.log(this.props);
          //  // useHistory.push("/");
          //  console.log(this.props.events);
        }

        const handleNameChange = (event) => {
            this.setState({title:event.target.value});
          };
      
          const handlePhnoChange = (event) => {
            this.setState({loc:event.target.value});
          };
      
          const handleDateChange = (newValue) => {
            this.setState({date:newValue});
          };

          const handleDestChange = (event) => {
            this.setState({dest:event.target.value});
          };
      
          const handleTimeChange = (newValue) => {
            this.setState({time:newValue});
          };
         
      
          const handleFareChange=(event)=>{
            this.setState({fare:event.target.value});
          }
      


        return(
            <div>
              <Box sx={{ mr: 2, display: { xs: "none", md: this.state.redirect} }}>
            <Grid
              className="entry"
                container
                sx={{
                position:"absolute",
                top:"23%",
                left:"25%"

                }}

                >
              <Card
                  sx={{
                  width: "650px",
                  height: "330px",
                  borderRadius: "1.5rem",
                  boxShadow: "0 10px 20px rgb(30,30,30)",
                  position:"absolute",    
                        }}
                        >
                <CardContent>
                  <Typography sx={{fontSize:"30px",
                  position:"absolute",
                  top:"30%",
                  left:"17%"
                }} color="text.secondary">
                    Please Login To Continue !!!
                  </Typography>
                 
                            <Link to="/LoginSignUp" style={{color:"white",textDecoration:"none",padding:"20px 20px 20px",backgroundColor:"red",
                          position:"absolute",top:"65%",left:"40%",borderRadius:"10px"}}>LOGIN</Link>

                          
                          {/* <Button variant="contained" sx={{position:"absolute",top:"65%",left:"40%"}} onClick={()=>{this.setState({eventAdded:false})}}> Continue</Button> */}
                        </CardContent>
                        </Card>
                    </Grid>
                    
        </Box>
                {/* <Fade in={this.props.fade}>
                <Fade in={fade}> */}
                 <Box sx={{ mr: 2, display: { xs: "none", md: this.state.md},backgroundColor:"black" }}>
            <Grid
              className="entry"
                container
                sx={{
                position:"absolute",
                top:"35%",
                left:"14%"

                }}

                >
              <Card
                  sx={{
                  width: "650px",
                  height: "430px",
                  borderRadius: "1.5rem",
                  boxShadow: "0 10px 20px rgb(30,30,30)",
                  position:"absolute",    
                        }}
                        >
                <CardContent>
                  <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                        Add Cab
                  </Typography>
                  <div >
        <TextField
          id="username"
          label="Name"
          variant="standard"
          color="error"
          value={this.state.title}
          onChange={handleNameChange}
          sx={{
            width: "270px",
            height: "120px",
            position:"absolute",
            top:"70px",
            left:"50px",
          }}
          // onChange={(e) => setUser(e.target.value)}
        
          required
        >
            
        </TextField>
        </div>
        <div >
        <TextField
          id="password"
          label="Phone No"
          value={this.state.loc}
          onChange={handlePhnoChange}
          sx={{
            width: "270px",
            height: "120px",
            position:"absolute",
            top:"70px",
            left:"350px",
          }}
          variant="standard"
          // onChange={(e) => setPwd(e.target.value)}
          color="error"
          required
        >
        </TextField>
        </div>
        <div >
        <TextField
          id="password"
          label="Destination"
          value={this.state.dest}
          onChange={handleDestChange}
          sx={{
            width: "270px",
            height: "120px",
            position:"absolute",
            top:"220px",
            left:"350px",
          }}
          variant="standard"
          // onChange={(e) => setPwd(e.target.value)}
          color="error"
          required
        >
        </TextField>
        </div>
        <div  style={{
          position:"absolute",
            top:"150px",
            left:"50px",
          }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
        
          label="Date"
          value={this.state.date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField color="error" {...params} />}
         
        />
        
        </LocalizationProvider>
        </div>
        <div  style={{
          position:"absolute",
            top:"150px",
            left:"350px",
          }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
        
          label="Time"
          value={this.state.time}
          onChange={handleTimeChange}
          renderInput={(params) => <TextField color="error" {...params} />}
         
        />
        
        </LocalizationProvider>
        </div>
        <div >
        <TextField
          id="filled-select-currency"
          label="Total Fare"
          color="error"
          value={this.state.fare}
          onChange={handleFareChange}
          size="small"
          variant="filled"
          sx={{
            width: "270px",
            height: "120px",
            position:"absolute",
            top:"220px",
            left:"50px",
          }}
        />
          
        
        </div>
        
                            <Button variant="contained" onClick={handleAddEvent}
                            color="error"
                               sx={{
                                width: "5vw",
                                height: "6vh",
                                position:"absolute",
                                top:"370px",
                                left:"550px",
                            }}>
                              Save</Button>
                        </CardContent>
                        </Card>
                    </Grid>
                    {/* </Fade>
                    </Fade> */}
                    </Box>
                    <Fade in={this.state.eventAdded}>
            <Grid
              className="entry"
                container
                sx={{
                position:"absolute",
                top:"23%",
                left:"2%"

                }}

                >
              <Card
                  sx={{
                  width: "650px",
                  height: "330px",
                  borderRadius: "1.5rem",
                  boxShadow: "0 10px 20px rgb(30,30,30)",
                  position:"absolute",    
                        }}
                        >
                <CardContent>
                  <Typography sx={{fontSize:"30px",
                  position:"absolute",
                  top:"30%",
                  left:"17%"
                }} color="text.secondary">
                    Event Added Successfully !!!
                  </Typography>
                 
                            <Link to="/ScheduleEvents" style={{color:"white",textDecoration:"none",padding:"20px 20px 20px",backgroundColor:"red",
                          position:"absolute",top:"65%",left:"40%",borderRadius:"10px"}}> CONTINUE</Link>
                          {/* <Button variant="contained" sx={{position:"absolute",top:"65%",left:"40%"}} onClick={()=>{this.setState({eventAdded:false})}}> Continue</Button> */}
                        </CardContent>
                        </Card>
                    </Grid>
                    
                    </Fade>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
return{
  events: state.cabShare,
  user:state.user,
  pwd:state.pwd,
  loggedIn:state.loggedIn,
}
}

const mapDispatchToProps =(dispatch) =>
{
 return{
   addCab: (event)=>{dispatch({type:"ADD_CAB",event:event})}
 }
}

// export default connect(mapStateToProps,mapDispatchToProps)(ScheduleEvents);
export default connect(mapStateToProps,mapDispatchToProps)(AddCab);