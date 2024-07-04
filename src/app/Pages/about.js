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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Aboutpage() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Box>
          <h2>Event Affair</h2>
          <h3>Our Vision: </h3>
          <p>
            At Event Affairs, our vision is to be the catalyst for extraordinary
            moments, setting the stage for unforgettable experiences that leave
            an indelible mark on the hearts and minds who attend it. We have
            highly experienced team members which give you the best services.
            You can completely rely on us for all the arrangements so that you
            can relish each and every moment of your special day.
          </p>

          <h3>Our team: </h3>
          <p>
            <b>Ajay Kumar (Director) :</b> With extensive experience spanning
            over 30 years in wedding planning , event management space , he is
            one of the most sought after players in the events industry . He is
            the driving force behind the successful execution of our diverse
            portfolio of events. He is the one with a creative mind, a strategic
            thinker that has impeccable organizational skills. From
            conceptualization to execution, he plays a pivotal role in ensuring
            that each event aligns with our client's vision and exceeds
            expectations - again and again.
            <Box
              component="img"
              sx={{
                height: "50%",
                display: "block",
                maxWidth: "100%",
                overflow: "hidden",
                width: "25%",
              }}
              src={require("../../images/director.jpg")}
              alt="Director"
            />
          </p>

          <hr></hr>

          <p>
            <b>Abhishek Raj (Head of ground operation and execution): </b>
            Abhisek is the orchestrator behind the scenes, ensuring that every
            detail of our events unfolds flawlessly. He is a meticulous planner
            with a creative touch, someone who can turn logistical challenges
            into opportunities for innovation. From coordinating event logistics
            to overseeing on-site execution, he plays a key role in delivering
            events that captivate and leave a lasting impression.
          </p>
          <p>
            He is your go to person during events, leading a dedicated team to
            execute plans with precision and grace. He collaborates closely with
            clients to understand their unique needs and exceed expectations in
            execution.
            <Box
              component="img"
              sx={{
                height: "50%",
                display: "block",
                maxWidth: "100%",
                overflow: "hidden",
                width: "25%",
              }}
              src={require("../../images/abhi.png")}
              alt="Director"
            />
          </p>

          <hr></hr>

          <p>
            <b>
              Neeraj Kumar (Head of Business Development and Client Servicing):{" "}
            </b>
            Neeraj is a key pillar for our company's growth, responsible for
            building strategic partnerships and ensuring unparalleled client
            satisfaction. He is a visionary leader with a knack for identifying
            opportunities, cultivating relationships, and driving initiatives
            that align with our commitment to excellence.
          </p>
          <p>
            He plays a pivotal role in elevating our brand, fostering client
            satisfaction, and creating enduring connections with our vendor
            partners. He conducts market research and analysis to identify
            emerging trends, client needs, and competitive opportunities. Neeraj
            leads and inspire a high-performing business development and client
            servicing team, fostering a collaborative and results-driven
            culture.
            <Box
              component="img"
              sx={{
                height: "50%",
                display: "block",
                maxWidth: "100%",
                overflow: "hidden",
                width: "25%",
              }}
              src={require("../../images/neeraj.JPG")}
              alt="Director"
            />  
          </p>
        </Box>
      </Container>
    </React.Fragment>
  );
}
