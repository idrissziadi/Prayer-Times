import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid, Icon } from "@mui/material";
import NorthIcon from '@mui/icons-material/North';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import { geolib } from 'geolib';

// Coordinates for the Kaaba in Mecca
const KAABA_COORDINATES = { latitude: 21.4225, longitude: 39.8262 };

const QiblaDirection = () => {
  const [direction, setDirection] = useState(null);
  const [description, setDescription] = useState("Calculating...");

  useEffect(() => {
    const calculateQiblaDirection = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const qiblaDirection = geolib.getCompassDirection({
              latitude1: latitude,
              longitude1: longitude,
              latitude2: KAABA_COORDINATES.latitude,
              longitude2: KAABA_COORDINATES.longitude,
            });

            setDirection(qiblaDirection);
            setDescription("The Qibla direction is towards the Kaaba in Mecca.");
          },
          (error) => {
            setDirection(null);
            setDescription("Unable to retrieve location.");
            console.error(error);
          }
        );
      } else {
        setDirection(null);
        setDescription("Geolocation is not supported by this browser.");
      }
    };

    calculateQiblaDirection();
  }, []);

  return (
    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
      <Card variant="outlined" sx={{ width: '100%', maxWidth: 400, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" align="center" gutterBottom>
            Qibla Direction
          </Typography>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Icon fontSize="large" sx={{ color: 'primary.main' }}>
                <CompassCalibrationIcon />
              </Icon>
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center">
                {direction ? `${direction}°` : "Calculating..."}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QiblaDirection;
