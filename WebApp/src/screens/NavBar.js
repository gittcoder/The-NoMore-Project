import * as React from 'react';
import { Component } from 'react';
import About from './Aboutdiv';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ScheduleEvents from './ScheduleEvents'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SportsBook from './SportsBook';
import CabShare from './CabShare';
import EmptyClass from './EmptyClass';
import LoginSignUp from './LoginSignUp';
import SignUp from './SignUp';
import EventsForm from "../components/EventsForm";
import { connect } from 'react-redux';
import UpdateEvents from '../components/UpdateEvents';
import AddCab from '../components/AddCab';
import ContactUs from './contact'


class ResponsiveAppBar extends Component{

  state={
    anchorElNav : null ,
    anchorElUser :null ,
    navigate:0,
    signedIn:false,
    divertToLogin:false,
    option:"Login",
    nav:"/LoginSignUp",
    client: null,
    checked:false,
  }

  
  // componentDidUpdate()
  // {
  //   console.log("INSIDE NAVBAR");
  //   console.log(this.props);
  //   if(this.props.loggedIn===true&&this.state.checked===false)
  //   {
  //     this.setState({signedIn:true,option:"hello "+this.props.user+" !!!",checked:true});
  //   }
  //   else if(this.props.loggedIn===false&&this.state.checked===true)
  //   {
  //     this.setState({signedIn:false,option:"Login",checked:false});
  //   }
  // }
  
  

  
  render()
  {

  return (
    <div className='Home'>
       <BrowserRouter>
    <AppBar position="static" style={{backgroundColor:'#547189'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            
          >
            NoMore
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event)=>{this.setState({anchorElNav : event.currentTarget })}}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(this.state.anchorElNav)}
              onClose={()=>{this.setState({anchorElNav : null})}}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                  <MenuItem onClick={()=>{this.setState({anchorElNav : null})}}>
                  <Link to={'/Home'} className="nav-link"> Home </Link>
            
            
                  </MenuItem>
                  <MenuItem onClick={()=>{this.setState({anchorElNav : null})}}>
                  <Link to={'/Announcement'} className="nav-link">Contact Us</Link>
                  </MenuItem>
                  <MenuItem  onClick={()=>{this.setState({anchorElNav : null})}}>
                  <Link to={'/about'} className="nav-link">About</Link>
                  </MenuItem>
                  {/* <MenuItem  >
                    
                  <Tooltip title="Show Features" style={{color:'white'}}>
              <Button onClick={(event)=>{if(this.state.anchorElUser===null){this.setState({anchorElUser : event.currentTarget })}
                                              else {this.setState({anchorElUser : null })}}} sx={{ p: 0 }}
                                              variant="contained"
                                              aria-label="account of current user"
              aria-controls="menu- vaarana"
              aria-haspopup="true"
              >
                    Features
              </Button>
            </Tooltip>
            
                  </MenuItem> */}
                  </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
           NoMore
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
          
          <Link to={"/"} style={{color:"white",textDecoration:"none",padding:"10px 10px 10px"}}>Home</Link>
          <Link to={"/Contact"} style={{color:"white",textDecoration:"none",padding:"10px 10px 10px"}}>Contact</Link>
          <Link to={"/about"} style={{color:"white",textDecoration:"none",padding:"10px 10px 10px"}}>About</Link>
            {/* <Tooltip id = "ShowFeatures" title="Show Features" style={{color:'white'}}>
              <Button onClick={(event)=>{if(this.state.anchorElUser===null){this.setState({anchorElUser : event.currentTarget })}
                                              else {this.setState({anchorElUser : null })}}} sx={{ p: 0 }}>
                    Features
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="features"
              anchorEl={this.state.anchorElUser}
              className="features"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(this.state.anchorElUser)}
              onClose={()=>{this.setState({anchorE1User : null})}}
            >

                  <MenuItem onClick={()=>{this.setState({anchorElUser : null})}}>
                  <Button variant="contained" onClick={()=>{this.setState({navigate:4})}}>Empty Class</Button>
                  </MenuItem>
                  <MenuItem  onClick={()=>{this.setState({anchorElUser : null})}}>
                  <Button  variant="contained" onClick={()=>{this.setState({navigate:5})}}>Events</Button>
                  </MenuItem>
                  <MenuItem  onClick={()=>{this.setState({anchorElUser : null})}}>
                  <Button  variant="contained" onClick={()=>{this.setState({navigate:6})}}>Sports Booking</Button>
                  </MenuItem>
                  <MenuItem  onClick={()=>{this.setState({anchorElUser : null})}}>
                  <Button  variant="contained" onClick={()=>{this.setState({navigate:7})}}>Share Cab</Button>
                  </MenuItem>
            </Menu> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={(event)=>{if(this.state.anchorElUser===null){this.setState({anchorElUser : event.currentTarget })}
                                              else {this.setState({anchorElUser : null })}}} sx={{ p: 0 }}>
              <AccountCircle fontSize="large" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={this.state.anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(this.state.anchorElUser)}
              onClose={()=>{this.setState({anchorE1User : null})}}
            >

                  <MenuItem onClick={()=>{this.setState({anchorElUser : null})}}>
                  {/* <Link to = "/LoginSignUp" underline='hover' variant='h4' sx={{textDecoration:"none"}}>Login/Sign Up</Link> */}
                  {/* <Button variant="contained" onClick={()=>{this.setState({navigate:4});history.push('/LoginSignUp')}}>Login/Sign Up</Button> */}
                  <Link to={this.state.nav} style={{color:"black",textDecoration:"none"}}>{this.state.option}</Link>
                  </MenuItem>
                  {/* <MenuItem  onClick={()=>{this.setState({anchorElUser : null})}}>
                  <Button  variant="contained" onClick={()=>{this.setState({navigate:5})}}>Logout</Button>
                  </MenuItem> */}
            </Menu>
          
 
    {/* <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={this.state.anchorElNav}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
   */}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {/* <ScheduleEvents></ScheduleEvents> */}
   
    <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='Contact' element={<ContactUs/>} />
              <Route path='about' element={<About/>} />
              <Route path='ScheduleEvents' element={<ScheduleEvents/>} />
              <Route path='SportsBook' element={<SportsBook/>} />
              <Route path='EmptyClass' element={<EmptyClass/>} />
              <Route path='CabShare' element={<CabShare/>} />
              <Route path='LoginSignUp' element={<LoginSignUp/>} />
              <Route path='SignUp' element={<SignUp/>} />
              <Route path='AddEvent' element={<EventsForm/>} />
              <Route path='UpdateEvents' element={<UpdateEvents/>} />
              <Route path='AddCab' element={<AddCab/>} />
              <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  
          </Routes>
          </BrowserRouter>
          {/* <div style={{position:"relative",top:"100%"}}>
    <Footer/>
    </div> */}
     
    {/* <Announcements display={this.state.navigate}/> */}
    {/* <TakeQuiz display={this.state.navigate}/>
    <Recruitment display={this.state.navigate}/>
    <About display={this.state.navigate}/> */}
    
    </div>
  );
}
}
const mapStateToProps = (state)=>
{
  return{
    loggedIn:state.loggedIn,
    user:state.user,
  }
}

const mapDispatchToProps = (dispatch)=>
{
  return{
    addEvent: (events)=>{dispatch({type:"ADD_EVENT",events:events})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResponsiveAppBar);


