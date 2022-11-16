import { React, Component } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Calendar from "../components/Calendar";
import DayEvents from "../components/DayEvents";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material/";
import { Fade } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";



class ScheduleEvents extends Component {
  state = {
    events: [],
    publicEvents: [],
    value: new Date(),
    addEvent: false,
    repeat: "Never",
    type: "public",
    title: "",
    loc: "",
    start: new Date(),
    end: new Date(),
    description: "",
    temp: "",
    hidden: "hidden",
    eventAdded: false,
    loggedIn: false,
    md: "none",
    sx: "none",
    redirect: "flex",
    checked: false,
  };

  componentDidMount() {
    // document.getElementById("footer").style.display="none";
    console.log(this.props);
    const events = this.props.events;
    this.setState({ events: events });
    this.setState({ loggedIn: this.props.loggedIn });
    this.setState({ publicEvents: this.props.publicEvents });
    if (this.state.loggedIn === true) {
      this.setState({ md: "flex", redirect: "none" });
    }
  }

  componentDidUpdate() {
    if (this.props.loggedIn === true && this.state.checked === false) {
      this.setState({
        md: "flex",
        sx: "flex",
        redirect: "none",
        checked: true,
      });
    } else if (this.props.loggedIn === false && this.state.checked === true) {
      this.setState({
        md: "none",
        sx: "none",
        redirect: "flex",
        checked: false,
      });
    }
  }

  render() {
    const handleEventChange = () => {
      if (this.state.addEvent === false) this.setState({ addEvent: true });
      else this.setState({ addEvent: false });
    };
    // const ScheduleEvents =(events)=> {
    // const [value, setValue] = React.useState(dayjs(new Date()));

    const handleChange = (newValue) => {
      this.setState({ value: newValue });
    };

    return (
      <div>
        <div>
          <Box sx={{ mr: 2, display: { xs: "none", md: this.state.redirect } }}>
            <Grid
              className="entry"
              container
              sx={{
                position: "absolute",
                top: "23%",
                left: "25%",
              }}
            >
              <Card
                sx={{
                  width: "650px",
                  height: "330px",
                  borderRadius: "1.5rem",
                  boxShadow: "0 10px 20px rgb(30,30,30)",
                  position: "absolute",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      position: "absolute",
                      top: "30%",
                      left: "17%",
                    }}
                    color="text.secondary"
                  >
                    Please Login To Continue !!!
                  </Typography>

                  <Link
                    to="/LoginSignUp"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: "20px 20px 20px",
                      backgroundColor: "red",
                      position: "absolute",
                      top: "65%",
                      left: "40%",
                      borderRadius: "10px",
                    }}
                  >
                    LOGIN
                  </Link>

                  {/* <Button variant="contained" sx={{position:"absolute",top:"65%",left:"40%"}} onClick={()=>{this.setState({eventAdded:false})}}> Continue</Button> */}
                </CardContent>
              </Card>
            </Grid>
          </Box>

          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: this.state.md },
              backgroundColor: "black",
            }}
          >
            <div
              className="title"
              style={{
                position: "absolute",
                top: "15%",
                left: "5%",
                fontSize: "20%",
              }}
            >
              <Typography variant="h2" component="h4" sx={{ color: "#557189" }}>
                Events
              </Typography>




<div className="" style={{width:"30%", fontSize:"18px", textAlign:"center",margin:"10px",}}>
              Lorem ipsum dolor sit amet. Qui ducimus accusantium Sed internos est minima magnam in dolorum aliquam At molestiae voluptatem vel molestiae saepe! Quo minus praesentium et dolorum velitVel nobis sed quia molestiae ut maxime tempore sit itaque facere ut autem Quis. Et cupiditate fugiat qui facilis laudantium Qui consequatur et sunt reiciendis qui dolores tempore id iste fugit qui voluptas exercitationem.
</div>



            </div>

            <Link
              to="/AddEvent"
              style={{
                color: "#F0F3F7",
                textDecoration: "none",
                fontFamily:"sans-serif",
                padding: "20px 20px 20px",
                backgroundColor: "#475261",
                position: "absolute",
                top: "60%",
                left: "5%",
                borderRadius: "10px",
                fontSize: "20px",
              }}>
              ADD EVENT +
            </Link>

            <Link
              to="/UpdateEvents"
              style={{
                color: "#F0F3F7",
                textDecoration: "none",
                padding: "20px 20px 20px",
                backgroundColor: "#475261",
                position: "absolute",
                top: "60%",
                left: "20%",
                borderRadius: "10px",
                fontSize: "20px",
                width:"250px",
              }}
            >
              EDIT/DELETE EVENTS
            </Link>
            <Typography
              style={{
                position: "absolute",
                top: "65%",
                left: "5%",
                fontSize: "100%",
              }}
            >
            </Typography>
            <div
              style={{
                position: "absolute",
                top: "75%",
                left: "5%",
                width: "15%",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  label="Select Date"
                  inputFormat="MM/DD/YYYY"
                  value={this.state.value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div style={{ position: "absolute", top: "15%", left: "45%" }}>
              <Calendar
                changeWidth="90%"
                changeDay={this.state.value}
                events={this.state.events}
              />
            </div>
            <div style={{ position: "absolute", top: "95%", left: "50%" }}>
              <DayEvents
                changeWidth="80%"
                changeDay={this.state.value}
                events={this.state.events}
              />
            </div>
            <div style={{ position: "absolute", top: "95%", left: "5%" }}>
              <DayEvents
                changeWidth="40%"
                changeDay={this.state.value}
                events={this.state.publicEvents}
              />
            </div>

            <Fade in={this.state.eventAdded}>
              <Grid
                className="entry"
                container
                sx={{
                  position: "absolute",
                  top: "23%",
                  left: "2%",
                }}
              >
                <Card
                  sx={{
                    width: "650px",
                    height: "330px",
                    borderRadius: "1.5rem",
                    boxShadow: "0 10px 20px rgb(30,30,30)",
                    position: "absolute",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        position: "absolute",
                        top: "30%",
                        left: "17%",
                      }}
                      color="text.secondary"
                    >
                      Event Added Successfully !!!
                    </Typography>

                    {/* <Link to="/ScheduleEvents" style={{color:"white",textDecoration:"none",padding:"20px 20px 20px",backgroundColor:"red",
                          position:"absolute",top:"65%",left:"40%",borderRadius:"10px"}}> CONTINUE</Link> */}
                    <Button
                      variant="contained"
                      sx={{ position: "absolute", top: "65%", left: "40%" }}
                      onClick={() => {
                        this.setState({ eventAdded: false });
                      }}
                    >
                      {" "}
                      Continue
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Fade>
          </Box>
          <div style={{ position: "absolute", top: "120%" }}>
            <Footer />
          </div>
        </div>
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
            <Button
              variant="contained"
              color="warning"
              size="large"
              onClick={handleEventChange}
            >
              Add Event +
            </Button>
          </div>
          <div style={{ position: "absolute", top: "45%", left: "5%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Select Date"
                inputFormat="MM/DD/YYYY"
                value={this.state.value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div style={{ position: "absolute", top: "55%", left: "5%" }}>
            <Calendar
              changeWidth="85%"
              changeDay={this.state.value}
              events={this.state.events}
            />
          </div>
          <div style={{ position: "absolute", top: "130%", left: "5%" }}>
            <DayEvents
              changeWidth="85%"
              changeDay={this.state.value}
              events={this.state.events}
            />
          </div>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    loggedIn: state.loggedIn,
    publicEvents: state.publicEvents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (events) => {
      dispatch({ type: "ADD_EVENT", events: events });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleEvents);
