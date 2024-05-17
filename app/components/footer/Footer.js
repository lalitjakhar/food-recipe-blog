import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import styles from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      component="footer"
      className={styles.footerContainer}
      sx={{
        backgroundColor: "#240A34",
        padding: "2rem 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Link href="/" draggable={false}>
              <div className={styles.footerLogo}>
                <Image
                  src={"/assets/foodcompanylogo.svg"}
                  alt="foodcompanylogo"
                  layout="fill"
                  draggable={false}
                />
              </div>
            </Link>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about-us" variant="body1" color="inherit">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/blogs" variant="body1" color="inherit">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/orders" variant="body1" color="inherit">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/contact-us" variant="body1" color="inherit">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom color="inherit">
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
            <Typography variant="h6" gutterBottom color="inherit">
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body1" color="inherit">
              Get the latest updates and offers.
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.footerInput}
              />
              <button type="submit" className={styles.footerButton}>
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Typography variant="body1" color="inherit" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
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
