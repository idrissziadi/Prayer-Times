import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, Divider } from '@mui/material';
import axios from 'axios';

const IslamicCalendar = () => {
  const [calendar, setCalendar] = useState({ month: '', significantDates: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        // Replace with actual endpoint to fetch Islamic calendar data
        const response = await axios.get('https://api.aladhan.com/v1/gToH?date=today');
        // Example response handling, adjust based on actual API response
        const hijriDate = response.data.data.hijri;
        setCalendar({
          month: hijriDate.month.en,
          significantDates: ["10th: Ashura", "27th: Isra and Mi'raj"] // Example; replace with actual data if available
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Islamic calendar:', error);
        setLoading(false);
      }
    };

    fetchCalendar();
  }, []);

  return (
    <Card variant="outlined">
      <CardHeader title="Islamic Calendar" />
      <Divider />
      <CardContent>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <>
            <Typography variant="h6">Current Islamic Month:</Typography>
            <Typography variant="body1">{calendar.month}</Typography>
            <Typography variant="h6">Significant Dates:</Typography>
            <Typography variant="body1">
              {calendar.significantDates.length > 0
                ? calendar.significantDates.join(', ')
                : "No significant dates available"}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default IslamicCalendar;
