import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, Divider } from '@mui/material';
import axios from 'axios';

const DuaOfTheDay = () => {
  const [dua, setDua] = useState({ text: '', translation: '', explanation: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDua = async () => {
      try {
        // Use the actual endpoint from the Islamic API
        const response = await axios.get('https://api.aladhan.com/v1/duas');
        // Example: assuming the response contains a single dua object
        setDua(response.data.data.dua_of_the_day); // Adjust based on API response structure
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dua of the day:', error);
        setLoading(false);
      }
    };

    fetchDua();
  }, []);

  return (
    <Card variant="outlined">
      <CardHeader title="Dua of the Day" />
      <Divider />
      <CardContent>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <>
            <Typography variant="h6">Dua Text:</Typography>
            <Typography variant="body1">{dua.text}</Typography>
            <Typography variant="h6">Translation:</Typography>
            <Typography variant="body1">{dua.translation}</Typography>
            <Typography variant="h6">Explanation:</Typography>
            <Typography variant="body1">{dua.explanation}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DuaOfTheDay;
