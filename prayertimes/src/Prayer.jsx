import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  CircularProgress,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PrayerTimes from "./components/PrayerTimes";
import LocationSelector from "./components/LocationSelector";
import QiblaDirection from "./components/QiblaDirection";
import Settings from "./components/Settings";
import Footer from "./components/Footer";
import DuaOfTheDay from "./components/DuaOfTheDay";
import IslamicCalendar from "./components/IslamicCalendar";
import IslamicQuotes from "./components/IslamicQuotes";

function Prayer({ handleThemeToggle }) {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [nextPrayer, setNextPrayer] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=${location.city}&country=${location.country}&method=2`
        );
        setPrayerTimes(response.data.data.timings);
        calculateNextPrayer(response.data.data.timings);
        setLoading(false);
      } catch (error) {
        toast.error("Erreur lors du chargement des heures de prière.");
        setLoading(false);
      }
    };
    if (location.city && location.country) {
      fetchPrayerTimes();
    }
  }, [location]);

  const calculateNextPrayer = (times) => {
    const currentTime = new Date().getHours() + ":" + new Date().getMinutes();
    const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    for (let i = 0; i < prayers.length; i++) {
      if (currentTime < times[prayers[i]]) {
        setNextPrayer(prayers[i]);
        break;
      }
    }
  };

  return (
    <>
      {/* Application Header */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Prayer Times Dashboard
          </Typography>
          <Button color="inherit" onClick={handleThemeToggle}>
            Toggle Theme
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Container */}
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
        <ToastContainer />

        {/* Dashboard Layout with Grid */}
        <Grid container spacing={3}>
          {/* Location Selector Card */}
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardHeader title="Select Your Location" />
              <Divider />
              <CardContent>
                <LocationSelector setLocation={setLocation} />
              </CardContent>
            </Card>
          </Grid>

          {/* Prayer Times Card */}
          <Grid item xs={12} md={8}>
            <Card variant="outlined">
              <CardHeader title="Prayer Times" />
              <Divider />
              <CardContent>
                {loading ? (
                  <Grid container justifyContent="center">
                    <CircularProgress />
                  </Grid>
                ) : (
                  <PrayerTimes prayerTimes={prayerTimes} nextPrayer={nextPrayer} />
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Qibla Direction Card */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardHeader title="Qibla Direction" />
              <Divider />
              <CardContent>
                <QiblaDirection />
              </CardContent>
            </Card>
          </Grid>

          {/* Settings Card */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardHeader title="Settings" />
              <Divider />
              <CardContent>
                <Settings />
              </CardContent>
            </Card>
          </Grid>

          {/* Dua of the Day Card */}
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardHeader title="Dua of the Day" />
              <Divider />
              <CardContent>
                <DuaOfTheDay />
              </CardContent>
            </Card>
          </Grid>

          {/* Islamic Calendar Card */}
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardHeader title="Islamic Calendar" />
              <Divider />
              <CardContent>
                <IslamicCalendar />
              </CardContent>
            </Card>
          </Grid>

          {/* Islamic Quotes Card */}
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardHeader title="Islamic Quote" />
              <Divider />
              <CardContent>
                <IslamicQuotes />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Prayer;
