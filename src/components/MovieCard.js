import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.vote_average}
        </Typography>
      </CardContent>
      <Button
        size="small"
        component={Link}
        to={`/movie/${movie.id}`}
      >
        Learn More
      </Button>
    </Card>
  );
};

export default MovieCard;