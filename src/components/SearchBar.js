import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mb: 4 }}>
      <TextField
        fullWidth
        label="Pesquise um filme"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ ml: 2 }}>
        Pesquisar
      </Button>
    </Box>
  );
};

export default SearchBar;