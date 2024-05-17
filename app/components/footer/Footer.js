import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#240A34",
        padding: "2rem 0",
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Food Blog Company
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link href="#" variant="body2" color="inherit">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" color="inherit">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" color="inherit">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" color="inherit">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <GoogleIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body2">
              Get the latest updates and offers.
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  marginBottom: "12px",
                  padding: "0.5rem",
                  width: "70%",
                  marginRight: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f50057",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: "16px" }}>
          <Typography variant="body1" color="inherit" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Food Blogs
            </Link>{" "}
            {new Date().getFullYear()}
            {". All rights reserved."}
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
