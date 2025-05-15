import { useState } from 'react';
import { Rating, Typography, Box } from '@mui/material';

const RatingSystem = ({ initialValue = 0, onRatingChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onRatingChange) {
      onRatingChange(newValue);
    }
  };

  return (
    <Box>
      <Typography component="legend">Your Rating</Typography>
      <Rating
        name="movie-rating"
        value={value}
        onChange={handleChange}
        precision={0.5}
        max={10}
      />
      <Typography>{value}/10</Typography>
    </Box>
  );
};

export default RatingSystem;