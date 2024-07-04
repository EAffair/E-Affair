import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import Button from '@mui/material/Button';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import Navbar from "../../navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Hall-1",
    imgPath: require("../../images/EA-1.PNG"),
  },
  {
    label: "Hall-2",
    imgPath: require("../../images/EA-2.PNG"),
  },
  {
    label: "Hall-3",
    imgPath: require("../../images/EA-3.PNG"),
  },
  {
    label: "Hall-4",
    imgPath: require("../../images/EA-4.PNG"),
  },
  {
    label: "pic1.jpg",
    imgPath: require("../../images/pic1.jpg"),
  },
  {
    label: "pic21",
    imgPath: require("../../images/pic21.jpg"),
  },
  {
    label: "pic3-1",
    imgPath: require("../../images/pic3.jpg"),
  },
  {
    label: "pic4-1",
    imgPath: require("../../images/pic4.jpg"),
  },
  {
    label: "pic5-1",
    imgPath: require("../../images/pic5.jpg"),
  },
  {
    label: "pic6-1",
    imgPath: require("../../images/pic6.jpg"),
  },
  {
    label: "pic7-1",
    imgPath: require("../../images/pic7.jpg"),
  },
  {
    label: "pic8-1",
    imgPath: require("../../images/pic8.jpg"),
  },
];

export default function Homepage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: 10, marginBottom: 10 }}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> */}

        <Box sx={{ maxWidth: "100%", flexGrow: 1, marginTop: 2 }}>
          {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 400,
                      display: "block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          {/* <img src={require('../../images/EA-1.PNG')} >
      </img> */}
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
          {/* </Box> */}

          <h2>Event Affair</h2>
          <hr />
          <p>
            Welcome to our event management company based in Patna! We are a
            team of highly skilled and experienced professionals who are
            dedicated to providing exceptional event management services for our
            clients. We embrace cutting-edge technology and industry trends to
            bring fresh and exciting elements to every event.
          </p>
          <p>
            <b>
              "we plan event like your family member not like a service
              provider"
            </b>
          </p>
          <p>
            We understand that planning and executing a successful event
            requires careful planning, attention to detail, and a deep
            understanding of our clients' needs and objectives. That's why we
            work closely with our clients to understand their vision and goals
            for the event, and use our expertise and industry knowledge to
            deliver a truly memorable experience.
          </p>
          <p>
            Our services include everything from event conceptualization and
            planning to vendor management, logistics, and on-site coordination.
            We have extensive experience in managing a wide range of events,
            including weddings, corporate events, conferences, exhibitions, and
            more.
          </p>
          <p>
            At our event management company, we believe in delivering
            outstanding customer service at every stage of the event planning
            process. Our team is always available to answer your questions,
            address your concerns, and ensure that your event runs smoothly and
            seamlessly from start to finish.
          </p>
          <p>
            So if you're looking for an event management company that can
            deliver exceptional results and exceed your expectations, look no
            further. Contact us today to know more about our services and start
            planning your next successful event!
          </p>
        </Box>

        <p>
          <h2>Services</h2>
          <hr />
        </p>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require("../../images/Management.jpg")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      height={75}
                    >
                      Hospitality and Guest management
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      height={250}
                    >
                      Everything and anything that your guest needs. We provide
                      hotel booking and also give transportation facilities. We
                      send reminders to your guests for every single occasion.
                      We don’t let them miss anything.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>

            <Grid item xs>
              {/* <Item> */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require("../../images/decoration.jpg")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      height={75}
                    >
                      Decoration
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      height={250}
                    >
                      Most attractive part of the party is decoration. We
                      provide all kinds of floral decoration, tents, and
                      lightning. We convert your visuals into reality.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions> */}
              </Card>
              {/* </Item> */}
            </Grid>

            <Grid item xs>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require("../../images/food.jpg")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      height={75}
                    >
                      Food and Beverage
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      height={250}
                    >
                      We have an expert team of chefs and caterers to craft a
                      menu tailored to your event’s. From elegant plated dinners
                      to vibrant buffet spreads, we offer diverse catering
                      options that cater to all tastes and budgets.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>

            <Grid item xs>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require("../../images/vendor.jpg")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      height={75}
                    >
                      Vendor management
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      height={250}
                    >
                      To make memories memorable we connect you with the best
                      photographer, videographer, makeup artist, stylist, mehndi
                      artist, and pandits. From pre event to post event
                      everything is covered in a frame of memories. We
                      coordinate everything for each function.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>

            <Grid item xs>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require("../../images/dj.jpg")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      height={75}
                    >
                      Entertainment
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      height={250}
                    >
                      Live music adds a magical touch to any event. We work with
                      a variety of talented musicians, bands, and solo
                      performers who can create the perfect ambiance for your
                      event.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>

            <Grid item xs>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require("../../images/gift.jpg")}
                    alt="Invitation and Gifting"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      height={75}
                    >
                      Invitation and Gifting
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      height={250}
                    >
                      Invitations and gifting are the first and last impressions
                      your guests will have of your event. We understand the
                      value of gifts and invitations. Our team takes care of all
                      the logistics involved in invitation and gifting, from
                      sourcing and assembling to packaging and delivery.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
