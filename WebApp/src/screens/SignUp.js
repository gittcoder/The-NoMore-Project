import {React,Component} from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid} from '@mui/material/';
import { Fade } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from '../utils/axios';
import { Link } from 'react-router-dom';



  

class SignUp extends Component{
  
state={
  user:"",
  pwd:"",
  errMsg:"",
  loggedIn:false,
  events:[],
  repwd:"",
  message:"Failure",
  nav:"/SignUp",
  but:"Continue",
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
    if(this.state.pwd!==this.state.repwd)
    {
        this.setState({msg:"Passwords entered dont match !!!!",nav:"/SignUp",but:"Continue"});
      this.setState({loggedIn:true});
    }
    else if(response.data.status=="success")
    {
      console.log("Saving User!!!");
      this.setState({msg:"User Created Successfully !!!!",nav:"/",but:"Continue"});
      this.setState({loggedIn:true});
    }
    else if(response.data.status=="exists")
    {
        this.setState({msg:"User Already Exists !!!",nav:"/SignUp"});
      this.setState({loggedIn:true});
    }
    else
    {
        this.setState({msg:"Failure!! PLease try Again !!!",nav:"/LoginSignUp"});
        this.setState({loggedIn:true});
    }

    
   
    

} catch (err) {
    this.setState({loggedIn:true});
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
        <TextField
          id="password"
          label="Re-enter Password"
          type="password"
          sx={{
            width: "38vw",
            height: "120vh",
            position:"absolute",
            top:"38vh",
            left:"3vw",
          }}
          
          onChange={(e) => this.setState({repwd:e.target.value})}
          value={this.state.repwd}
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
          top:"48vh",
          left:"3vw",}}
          onClick={handleSubmit}
          >
            Register </Button>
            
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
                    {this.state.message}
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



export default SignUp;