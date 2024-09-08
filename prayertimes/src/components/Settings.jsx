import React from "react";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Settings = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Settings</Typography>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Calculation Method</InputLabel>
        <Select defaultValue={2}>
          <MenuItem value={1}>Muslim World League</MenuItem>
          <MenuItem value={2}>Islamic Society of North America</MenuItem>
          <MenuItem value={3}>Egyptian General Authority of Survey</MenuItem>
          <MenuItem value={4}>Umm al-Qura University, Makkah</MenuItem>
          {/* Add more calculation methods if necessary */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Settings;
