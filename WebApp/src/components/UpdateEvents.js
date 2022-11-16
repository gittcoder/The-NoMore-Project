
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
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MenuItem from '@mui/material/MenuItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const repeat = [{value: 'Never',label: 'Never',},
{value: 'Daily',label: 'Daily',},
{value: 'Weekly',label: 'Weekly',},
{value: 'Monthly',label: 'Monthly',},
{value: 'Yearly',label: 'Yearly',},
];

const type = [{value: 'public',label: 'public',},
{value: 'private',label: 'private',}
];

class UpdateEvents extends Component 
{
    state={
        cfade:false,
        fade:false,
        repeat:"Never",
        type:"public",
        title:"",
        loc:"",
        start: new Date(),
        end: new Date(),
        description:"",
        loggedIn:false,
        md:"none",
        sx:"none",
        redirect:"flex",
        checked:false,
        Id:0,
        show:"none",

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

      const handleEditEvent=(id)=>
      {
        const curr = this.props.events.find(event=>event.Id=id);
        this.setState({Id:id,title:curr.Subject,loc:curr.Location,start:curr.StartTime,end:curr.EndTime,description:curr.Description});
        this.setState({show:"flex"});
        console.log(this.state);
        console.log(id);
        
      }

      const ShowEvents=(events)=>
{
    const todo_list = events.length?(
        events.map((event) => {
          
            return(
                <div className="collection-item" key={event.Id}>
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
                   {event.Subject}
                  </Typography>
                  <Typography sx={{fontSize:"100%",
                  
                }} color="text.secondary">
                   Location : {event.Location}
                  </Typography>
                  <Typography sx={{fontSize:"100%",
                  
                }} color="text.secondary">
                   Start : {event.StartTime.toString()}
                  </Typography>
                  <Typography sx={{fontSize:"100%",
                  
                }} color="text.secondary">
                   End : {event.EndTime.toString()}
                  </Typography>
                  <Typography sx={{fontSize:"100%",
                  
                }} color="text.secondary">
                   Description : {event.Description}
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
        <p className="center">You have no events left !!</p>
    )
    return(
        <div className="events collection">
            {todo_list}
        </div>
    )
}
        
     
          const handleChangeEvent=async ()=>{
            const newStart =new Date(this.state.end.toString());
            const newEnd = new Date(this.state.end.toString());
            const id=this.state.Id;
            console.log(newStart);
            const event = {Id:id,Subject : this.state.title,StartTime:newStart,
              EndTime:newEnd,Location:this.state.loc,Description:this.state.description}
           // setTimeout(()=>{this.props.addEvent(this.state.events)},100);
           console.log(event);
           this.props.editEvent(event,id);
           console.log(this.props);
           
           
           try{
          const d = new Date(this.state.start.toString());
          const newStart1="new Date("+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"-"+d.getHours()+"-"+d.getMinutes()+")";
          const d1 = new Date(this.state.end.toString());
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
             if(response.data.status==="Success")
             {
                console.log("Lets GOOOOO!!!!!");
             }
             console.log(response);
            }
            catch(e){
              console.log(e);
            }
           this.setState({addEvent:false});
           this.setState({eventAdded:true});
           this.setState({show:"none"});
           console.log(this.props);
           // useHistory.push("/");
           console.log(this.props.events);
           this.setState({Id:0,title:'',loc:'',start:new Date(),end:new Date(),description:''});
        }

        const handleTitleChange = (event) => {
            this.setState({title:event.target.value});
          };
      
          const handleLocChange = (event) => {
            this.setState({loc:event.target.value});
          };
      
          const handleStartChange = (newValue) => {
            this.setState({start:newValue});
          };
      
          const handleEndChange = (newValue) => {
            this.setState({end:newValue});
          };
          const handleDescChange = (event) => {
            this.setState({description:event.target.value});
          };
      
          const handleRepeatChange=(event)=>{
            this.setState({repeat:event.target.value});
          }
      
          const handleTypeChange=(event)=>{
            this.setState({type:event.target.value});
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
                   EVENTS
                  </Typography>
                  <Link to="/ScheduleEvents" style={{color:"white",textDecoration:"none",padding:"20px 20px 20px",backgroundColor:"red",
                          position:"absolute",top:"10%",left:"25%",borderRadius:"10px"}}>BACK</Link>
  
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
                        Edit Event
                  </Typography>
                  <div >
        <TextField
          id="username"
          label="Title"
          variant="standard"
          color="error"
          value={this.state.title}
          onChange={handleTitleChange}
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
          label="Location"
          value={this.state.loc}
          onChange={handleLocChange}
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
        <div  style={{
          position:"absolute",
            top:"150px",
            left:"50px",
          }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
        
          label="Start"
          value={this.state.start}
          onChange={handleStartChange}
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
        <DateTimePicker
        
          label="End"
          value={this.state.end}
          onChange={handleEndChange}
          renderInput={(params) => <TextField color="error" {...params} />}
         
        />
        
        </LocalizationProvider>
        </div>
        <div >
        <TextField
          id="filled-select-currency"
          select
          label="Repeat"
          color="error"
          value={this.state.repeat}
          onChange={handleRepeatChange}
          size="small"
          variant="filled"
          sx={{
            width: "270px",
            height: "120px",
            position:"absolute",
            top:"220px",
            left:"50px",
          }}
        >
          {repeat.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency"
          select
          label="Type"
          color="error"
          value={this.state.type}
          onChange={handleTypeChange}
          size="small"
          variant="filled"
          sx={{
            width: "270px",
            height: "120px",
            position:"absolute",
            top:"220px",
            left:"350px",
          }}
        >
          {type.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          variant="filled"
          color="error"
          multiline
          maxRows={4}
          value={this.state.description}
          onChange={handleDescChange}
          sx={{top:"210px",
               left:"30px",
               width:"500px",
          }}
        />
                            <Button variant="contained" onClick={handleChangeEvent}
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
                    Event Updated Successfully !!!
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
  events: state.events,
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
export default connect(mapStateToProps,mapDispatchToProps)(UpdateEvents);