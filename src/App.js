import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;