import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, Divider } from '@mui/material';
import axios from 'axios';

const IslamicQuotes = () => {
  const [quote, setQuote] = useState({ text: '', source: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Replace with the actual endpoint for Islamic quotes
        const response = await axios.get('https://api.islamic-quotes.com/v1/quotes/random');
        // Example response handling, adjust based on actual API response
        setQuote({
          text: response.data.quote,
          source: response.data.author
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Islamic quote:', error);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <Card variant="outlined">
      <CardHeader title="Islamic Quote" />
      <Divider />
      <CardContent>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <>
            <Typography variant="h6">Quote:</Typography>
            <Typography variant="body1">{quote.text}</Typography>
            <Typography variant="h6">Source:</Typography>
            <Typography variant="body1">{quote.source}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default IslamicQuotes;
