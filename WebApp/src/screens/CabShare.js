
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
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';



class CabShare extends Component 
{
    state={
        cfade:false,
        fade:true,
        fare:"Never",
        type:"public",
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
        owner:"",
        id:"",
        events:[],

    }

    componentDidMount()
    {
      console.log("Inside CabShare!!!");
      const {events} =this.props.events;
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
  


      const handleEditEvent=(id)=>
      {
        const curr = this.props.events.find(event=>event.Id=id);
        this.setState({
          id:id,
          fare:curr.fare,
          date:curr.date,
          time:curr.time,
          dest:curr.dest,
          from:curr.from,
          owner:curr.owner,
        });
        this.setState({show:"flex"});
        console.log(this.state);
        console.log(id);
        
      }

      const ShowEvents=(events)=>
{
    const todo_list = events.length?(
        events.map((event) => {
          
            return(
                <div className="collection-item" key={event.id}>
                  <Grid
              className="entry"
                container

                >
              <Card
                  sx={{
                  width:"60rem",
                  borderRadius: "1.5rem",
                  margin:"2% 2% 2%",
                 
                        }}
                        >
                <CardContent>
                  <Typography sx={{fontSize:"160%",
                  
                }} color="text.secondary">
                   {event.from} to {event.dest}
                  </Typography>
                  <Typography sx={{fontSize:"100%",
                  
                }} color="text.secondary">
                   Date : {event.date.toString().slice(0,15)}
                  </Typography>
                  <Typography sx={{fontSize:"100%",
                  
                }} color="text.secondary">
                   Time : {event.time.toString(15,event.time.toString().length)}
                  </Typography>
                 
                  <Typography sx={{fontSize:"100%",
                  
                }} color="text.secondary">
                   Phone No : {event.phno}
                  </Typography>

                  <Typography sx={{fontSize:"100%",
                  
                }} color="text.secondary">
                   Owner : {event.owner}
                  </Typography>
                  
                  <Button variant="outlined" startIcon={<EditIcon />}  sx={{margin:"1% 1% 1%"}} onClick={()=>{handleEditEvent(event.Id)}}>
                    Edit
                  </Button>
                  <Button variant="outlined" startIcon={<DeleteIcon />} sx={{margin:"1% 1% 1%"}}>
                    Delete
                  </Button>
                  
  
  
                        </CardContent>
                        </Card>
                    </Grid>
                  
                </div>
                )
        })
    ):(
      <Grid
      className="entry"
        container
        
        >
      <Card
          sx={{
          width:"60rem",
          borderRadius: "1.5rem",
          margin:"2% 2% 2%",
         
                }}
                >
        <CardContent>
          <Typography sx={{fontSize:"160%",
          
        }} color="text.secondary">Empty
           
          </Typography>
         
          


                </CardContent>
                </Card>
            </Grid>
    )
    return(
        <div className="events collection">
            {todo_list}
        </div>
    )
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
       
        {/* {console.log(this.props.events)} */}
               
                {/* <Fade in={fade}> */}
                <Box sx={{ mr: 2, display: { xs: "none", md: this.state.md},backgroundColor:"black" }}>
                <Typography sx={{fontSize:"260%",position:"absolute",top:"10%",left:"5%",
                  
                }} color="red">
                   CAB SHARING
                  </Typography>
                  <Link to="/" style={{color:"white",textDecoration:"none",padding:"20px 20px 20px",backgroundColor:"red",
                          position:"absolute",top:"10%",left:"30%",borderRadius:"10px"}}>BACK</Link>
                  <Link to="/AddCab" style={{color:"white",textDecoration:"none",padding:"20px 20px 20px",backgroundColor:"red",
                          position:"absolute",top:"10%",left:"45%",borderRadius:"10px"}}>Share a Cab</Link>
  
        <Box sx={{display:"flex",position:"absolute",top:"15%"}}>
          {ShowEvents(this.props.events)}
        </Box>
        
            <Grid
              className="entry"
                container
                sx={{
                position:"absolute",
                top:"15%",
                left:"14%",
                display: { xs: "none", md: this.state.show}

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
        
                            <Button variant="contained" onClick={handleEditEvent}
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
                    
                    </Box>
                    
                    {/* </Fade> */}
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
   editEvent: (event,id)=>{dispatch({type:"EDIT_EVENT",event:event,id:id})}
 }
}

// export default connect(mapStateToProps,mapDispatchToProps)(ScheduleEvents);
export default connect(mapStateToProps,mapDispatchToProps)(CabShare);