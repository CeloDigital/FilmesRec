import { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies, searchMovies } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    } else {
      const searchedMovies = await searchMovies(query);
      setMovies(searchedMovies);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Descubra seus filmes favoritos
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;