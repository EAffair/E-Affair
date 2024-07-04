import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#14081f" : theme.palette.grey[800],
        p: 0,
      }}

      // sx={{
      //     backgroundColor: (theme) =>
      //     theme.palette.mode === "light"
      //         ? theme.palette.red[200]
      //         : theme.palette.red[800],
      //     p: 6,
      // }}
    >
      <hr />
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="blue" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              We are Event Organizer, dedicated to providing the best service to
              our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="blue" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
              JUBLEE Decorators, Mahendru, Patna, Bihar, Pin Code 800006
            </Typography>
            <Typography variant="body2" color="white">
              Email: info@eventaffair.in
            </Typography>
            <Typography variant="body2" color="white">
              Phone: (+91) 8340501684
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="blue" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link
              color="inherit"
              href="https://github.com/AkashNGaurav/EventAffair"
            >
              EventAffair
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
