import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { fetchRecommendedMovies } from '../services/api';

const Recommendations = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const getRecommendations = async () => {
      // Na prática, você usaria as avaliações do usuário para gerar recomendações
      const movies = await fetchRecommendedMovies();
      setRecommendedMovies(movies);
    };
    getRecommendations();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Your Recommendations
      </Typography>
      <Grid container spacing={3}>
        {recommendedMovies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recommendations;