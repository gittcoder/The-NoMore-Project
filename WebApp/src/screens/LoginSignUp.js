import {React,Component} from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid} from '@mui/material/';
import { Fade } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Google } from "@mui/icons-material";
import axios from '../utils/axios';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


  

class LoginSignUp extends Component{
  
state={
  user:"",
  pwd:"",
  errMsg:"",
  loggedIn:false,
  events:[],
  msg:"",
  but:"",
  nav:"/",
}



    render(){
      

    
   
    
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(this.props);
  // if(errMsg===""){}
  try {
    console.log(this.state.user);
    console.log(this.state.pwd);
    const response = await axios.get(LOGIN_URL);
    console.log(response.data);
    console.log(response.data.status);
    if(response.data.status=="approved")
    {
      console.log("Saving User!!!");
      var str = response.data.events;
      var strLines = str.split("\n");
      // console.log(strLines)

      try{
      for (var i in strLines) {
      var obj = JSON.parse(strLines[i]);
      obj.StartTime=obj.StartTime.replaceAll("-",",");
      obj.EndTime=obj.EndTime.replaceAll("-",",");
      obj.StartTime=eval("("+obj.StartTime+")");
      obj.EndTime=eval("("+obj.EndTime+")");
      this.setState(prevState => ({
          events: [...prevState.events,obj]}));
    }
  }
  catch(e){}
    console.log(this.state.events);
      this.props.login(this.state.user,this.state.pwd,this.state.events);
      this.setState({loggedIn:true,msg:"Logged In Successfully !!",but:"Continue",nav:"/"});
    }
    else
    {
      console.log("Denied Login");
      this.setState({loggedIn:true,msg:"Bad Credentials !!",but:"Try Again",nav:"/LoginSignUp"});
    }
    console.log(JSON.stringify(response.status));
   
    

} catch (err) {
  this.setState({loggedIn:true,msg:"Failed To Login !!",but:"Try Again",nav:"/LoginSignUp"});
    // if (!err?.response) {
    //     setErrMsg('No Server Response');
    // } else if (err.response?.status === 400) {
    //     setErrMsg('Missing Username or Password');
    // } else if (err.response?.status === 401) {
    //     setErrMsg('Unauthorized');
    // } else {
    //     setErrMsg('Login Failed');
    // }
}
}
  


  


  
 
    return (
        <div>
          <div style={{position:"absolute",top:"15%",left:"25%"}}>
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
          Login
        </Typography>
        <div >
        <TextField
          id="username"
          label="Username"
          
          sx={{
            width: "38vw",
            height: "120vh",
            position:"absolute",
            top:"15vh",
            left:"3vw",
          }}
          onChange={(e) => this.setState({user:e.target.value})}
          value={this.state.user}
          required
        >
            
        </TextField>
        </div>
        <div >
        <TextField
          id="password"
          label="Password"
          type="password"
          sx={{
            width: "38vw",
            height: "120vh",
            position:"absolute",
            top:"26vh",
            left:"3vw",
          }}
          
          onChange={(e) => this.setState({pwd:e.target.value})}
          value={this.state.pwd}
          required
        >
        </TextField>
        </div>
        <div >
        
  
        </div>
        <div>
          <Button variant="contained" 
          sx={{ p: 0 ,position:"absolute",
          width: "38vw",
          height: "6vh",
          top:"38vh",
          left:"3vw",}}
          onClick={handleSubmit}
          >
            Login </Button>
            <Typography 
            sx={{
              fontSize: 15 ,
              position:"absolute",
              top:"46vh",
              left:"21vw",
            }}
             color="text.secondary" gutterBottom>
          OR
        </Typography>
        <Button variant = "contained"  
            sx={{ 
            
              width: "38vw",
              height: "6vh",
              position:"absolute",
              top:"50vh",
              left:"3vw", }}>
              <Google fontSize="large"  sx={{marginRight:"1vw"}}/> Sign in with Google
              </Button>
              <Typography 
              variant="h6"
              sx={{
                fontSize:"1vw",
                position:"absolute",
                top:"62vh",
                left:"7vw",
              }}>
                Don't have an account ? 
              </Typography>
        <Link to="/SignUp"
          style={{
            width: "12vw",
            height: "6vh",
            position:"absolute",
            top:"61vh",
            left:"24vw",
            backgroundColor: "#1976d2",
            textDecoration:"none",
            color:"white",
            display:"flex",
            padding:"10px 0px 0px",
            justifyContent:"center",

          }}>
            SIGN UP </Link>
        </div>
        </CardContent>
        </Card>
      </Grid>
      <Fade in={this.state.loggedIn}>
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
                    {this.state.msg}
                  </Typography>
                 
                            <Link to={this.state.nav} onClick={()=>{this.setState({loggedIn:false})}} style={{color:"white",textDecoration:"none",padding:"20px 20px 20px",backgroundColor:"red",
                          position:"absolute",top:"65%",left:"40%",borderRadius:"10px"}}> {this.state.but}</Link>
                        </CardContent>
                        </Card>
                    </Grid>
                    </Fade>
    
    </div>
          
        </div>
    );
        }
  }

const mapDispatchToProps=(dispatch)=>
{
  return{
    login: (user,pwd,events)=>{dispatch({type:"LOGIN",user:user,pwd:pwd,events:events})}
  }
}

const mapStateToProps=(state)=>
{
  return {
    user:state.user,
    pwd:state.pwd,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginSignUp);