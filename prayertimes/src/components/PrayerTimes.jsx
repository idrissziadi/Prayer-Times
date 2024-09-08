import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const PrayerTimes = ({ prayerTimes, nextPrayer }) => {
  
  useEffect(() => {
    // Function to send a notification
    const sendNotification = (prayerName) => {
      if (Notification.permission === "granted") {
        new Notification(`It's time for ${prayerName}!`, {
          body: `The time for ${prayerName} prayer has arrived.`,
        });
      }
    };

    // Function to check if it's time for a prayer
    const checkPrayerTimes = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      const formattedCurrentTime = `${currentHour}:${currentMinute < 10 ? `0${currentMinute}` : currentMinute}`;

      Object.entries(prayerTimes).forEach(([name, time]) => {
        if (time === formattedCurrentTime) {
          sendNotification(name);
        }
      });
    };

    // Request notification permission on component mount
    if (Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    }

    // Check prayer times every minute
    const intervalId = setInterval(checkPrayerTimes, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);

  }, [prayerTimes]);

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Next Prayer: <Typography component="span" color="primary">{nextPrayer}</Typography>
      </Typography>
      <Card variant="outlined" sx={{ boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={2}>
            {Object.entries(prayerTimes).map(([name, time]) => (
              <Grid item xs={12} sm={6} key={name}>
                <Typography variant="body1">
                  <Typography component="span" fontWeight="bold" color="text.primary">
                    {name}:
                  </Typography>{" "}
                  {time}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PrayerTimes;
