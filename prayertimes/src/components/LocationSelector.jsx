import React from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";

const LocationSelector = ({ setLocation }) => {
  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchClick = () => {
    // Optional: Add additional functionality for the button click here
    console.log("Search button clicked");
  };

  return (
    <Box sx={{ p: 2, border: "1px solid", borderColor: "divider", borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" gutterBottom>
        Select Your Location
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            variant="outlined"
            name="city"
            onChange={handleLocationChange}
            fullWidth
            sx={{ mb: 2 }}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            variant="outlined"
            name="country"
            onChange={handleLocationChange}
            fullWidth
            sx={{ mb: 2 }}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchClick}
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LocationSelector;
