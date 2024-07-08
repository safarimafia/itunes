import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import FavoritesList from '../components/FavoritesList';
import { Container } from 'react-bootstrap';

// Home page component
const Home = ({ onFavorite, favorites, onRemoveFavorite }) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async ({ term, media }) => {
    try {
      const response = await fetch(`/api/search?term=${term}&media=${media}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data.results);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <h1 className="my-4 text-center">iTunes Search</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p className="text-danger">{error}</p>}
      <SearchResults results={results} onFavorite={onFavorite} />
      <h2 className="my-4 text-center">Favorites</h2>
      <FavoritesList favorites={favorites} onRemoveFavorite={onRemoveFavorite} />
    </Container>
  );
};

export default Home;
