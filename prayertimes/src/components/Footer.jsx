import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => (
  <Box sx={{ bgcolor: "primary.main", color: "white", py: 2, mt: 5 }}>
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://yourwebsite.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
);

export default Footer;
