import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FilmesRec
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Início
        </Button>
        <Button color="inherit" component={Link} to="/recommendations">
          Recomendações
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;