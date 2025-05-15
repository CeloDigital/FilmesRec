import axios from 'axios';

const API_KEY = 'SUA_CHAVE_DE_API_AQUI'; // Obtenha em https://www.themoviedb.org/
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const fetchPopularMovies = async () => {
  try {
    const response = await api.get('/movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchRecommendedMovies = async () => {
  try {
    // Esta é uma implementação simplificada
    // Em um sistema real, você usaria um algoritmo de recomendação baseado nas avaliações do usuário
    const response = await api.get('/movie/top_rated', {
      params: {
        page: 1,
      },
    });
    return response.data.results.slice(0, 8);
  } catch (error) {
    console.error('Error fetching recommended movies:', error);
    return [];
  }
};