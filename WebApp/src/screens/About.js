
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material/';
import { Divider } from '@mui/material';
import { Fade } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const About = ({display}) => {
  var checked = false;
  if(display===3)
  {
    checked=true;
  }
  return (
    <Fade in={checked}>
    <Grid
        className="entry"
        container
        sx={{
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
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
          About
        </Typography>
        <Typography variant="h5" component="div">
          <p>{bull} Recruitments coming soon</p>
          <p>{bull} Follow us on instagram - <a href="https://www.instagram.com/team_uav_creationlabs/">Instagram-Team UAV</a></p>
        </Typography>
        </CardContent>
        </Card>
      </Grid>
    </Fade>
  )
}

export default About