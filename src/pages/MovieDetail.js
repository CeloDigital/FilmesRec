import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Paper, Chip } from '@mui/material';
import RatingSystem from '../components/RatingSystem';
import { fetchMovieDetails } from '../services/api';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  const handleRatingChange = (newValue) => {
    setUserRating(newValue);
    // Aqui você poderia salvar a avaliação no backend
    console.log(`User rated ${movie.title} with ${newValue}`);
  };

  if (!movie) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {movie.release_date} • {movie.runtime} minutes
            </Typography>
            <div style={{ marginBottom: '16px' }}>
              {movie.genres.map((genre) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  style={{ marginRight: '8px', marginBottom: '8px' }}
                />
              ))}
            </div>
            <Typography variant="h6" gutterBottom>
              Overview
            </Typography>
            <Typography paragraph>{movie.overview}</Typography>
            <Typography variant="h6" gutterBottom>
              Average Rating: {movie.vote_average}/10
            </Typography>
            <RatingSystem
              initialValue={userRating}
              onRatingChange={handleRatingChange}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MovieDetail;