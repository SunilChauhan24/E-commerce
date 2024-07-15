import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  
  return (
    
    <div className="footer-container">
      <div className="bg-gray-800 text-gray-300 py-10">
        <Grid container spacing={3} justifyContent="center">
          {/* Company Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Company
            </Typography>
            <ul className="list-none">
              <li>
                <Button variant="text" className="hover:text-white">
                  About
                </Button>
              </li>
              <li>
                <Button variant="text" className="hover:text-white">
                  Blog
                </Button>
              </li>
              <li>
                <Button variant="text" className="hover:text-white">
                  Press
                </Button>
              </li>
              <li>
                <Button variant="text" className="hover:text-white">
                  Jobs
                </Button>
              </li>
              <li>
                <Button variant="text" className="hover:text-white">
                  Partners
                </Button>
              </li>
            </ul>
          </Grid>

          {/* Additional Sections */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Categories
            </Typography>
            <ul className="list-none">
              <li>
                <Button variant="text" className="hover:text-white">
                  Men's Clothing
                </Button>
              </li>
              <li>
                <Button variant="text" className="hover:text-white">
                  Women's Clothing
                </Button>
              </li>
              <li>
                <Button variant="text" className="hover:text-white">
                  Kids Clothing
                </Button>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Connect With Us
            </Typography>
            <ul className="list-none">
              <li>
                <Button variant="text" className="hover:text-white">
                  Facebook
                </Button>
              </li>
              <li>
                <Button variant="text" className="hover:text-white">
                  Twitter
                </Button>
              </li>
              <li>
                <Button variant="text" className="hover:text-white">
                  Instagram
                </Button>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} md={3} className="text-center md:text-right">
            <Typography variant="body2" gutterBottom>
              &copy; 2024 My Company. All Rights Reserved.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Made With Love By Me.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Icons Made By{" "}
              <Link
                href="https://www.freepik.com"
                color="inherit"
                underline="always"
              >
                Freepik
              </Link>{" "}
              from{" "}
              <Link
                href="https://www.flaticon.com/"
                color="inherit"
                underline="always"
              >
                www.flaticon.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
