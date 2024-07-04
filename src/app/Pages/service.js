import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Servicepage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Accordion sx={{ my: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h4">
              # Hospitality and Guest management
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, flex: "auto" }}
                  image={require("../../images/Management.jpg")}
                  alt="Live from space album cover"
                />

                <CardContent sx={{ flex: "auto" }}>
                  <Typography component="div" variant="h5">
                    Hospitality and Guest management
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Everything and anything that your guest needs. We provide
                    hotel booking and also give transportation facilities. We
                    send reminders to your guests for every single occasion. We
                    don’t let them miss anything.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h4"># Decoration</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, flex: "auto" }}
                  image={require("../../images/decoration.jpg")}
                  alt="Live from space album cover"
                />

                <CardContent sx={{ flex: "auto" }}>
                  <Typography component="div" variant="h5">
                    Decoration
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Most attractive part of the party is decoration. We provide
                    all kinds of floral decoration, tents, and lightning. We
                    convert your visuals into reality.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ my: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h4"># Food and Beverage </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, flex: "auto" }}
                  image={require("../../images/food.jpg")}
                  alt="Live from space album cover"
                />

                <CardContent sx={{ flex: "auto" }}>
                  <Typography component="div" variant="h5">
                    Food and Beverage
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <p>
                      "Elevate Your Event with Delectable Culinary Experiences"
                    </p>
                    <p>
                      We have an expert team of chefs and caterers to craft a
                      menu tailored to your event’s. From elegant plated dinners
                      to vibrant buffet spreads, we offer diverse catering
                      options that cater to all tastes and budgets.
                    </p>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ my: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h4"># Vendor management </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, flex: "auto" }}
                  image={require("../../images/vendor.jpg")}
                  alt="Live from space album cover"
                />

                <CardContent sx={{ flex: "auto" }}>
                  <Typography component="div" variant="h5">
                    Vendor management
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <p>“Capture the moment”</p>
                    <p>
                      To make memories memorable we connect you with the best
                      photographer, videographer, makeup artist, stylist, mehndi
                      artist, and pandits. From pre event to post event
                      everything is covered in a frame of memories. We
                      coordinate everything for each function.
                    </p>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ my: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h4"># Entertainment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, flex: "auto" }}
                  image={require("../../images/dj.jpg")}
                  alt="Live from space album cover"
                />

                <CardContent sx={{ flex: "auto" }}>
                  <Typography component="div" variant="h5">
                    Entertainment
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    No two events are the same, and we believe that
                    entertainment should be as unique as your event itself.
                    Whether you're planning a corporate conference, a wedding
                    celebration, a themed party, or a product launch, our team
                    of entertainment experts collaborates with you to understand
                    your event's theme, objectives, and audience, creating
                    tailored entertainment solutions that match your vision.
                    <p>
                      Live music adds a magical touch to any event. We work with
                      a variety of talented musicians, bands, and solo
                      performers who can create the perfect ambiance for your
                      event.
                    </p>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ marginBottom: 5 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h4"># Invitation and Gifting</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, flex: "auto" }}
                  image={require("../../images/gift.jpg")}
                  alt="Live from space album cover"
                />

                <CardContent sx={{ flex: "auto" }}>
                  <Typography component="div" variant="h5">
                    Invitation and Gifting
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Invitations and gifting are the first and last impressions
                    your guests will have of your event. We understand the value
                    of gifts and invitations. Our team takes care of all the
                    logistics involved in invitation and gifting, from sourcing
                    and assembling to packaging and delivery.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
}
