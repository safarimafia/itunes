import React from 'react';
import FavoritesList from '../components/FavoritesList';
import { Container } from 'react-bootstrap';

// Favorites page component
const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <Container>
      <h1 className="my-4 text-center">Favorites</h1>
      <FavoritesList favorites={favorites} onRemoveFavorite={onRemoveFavorite} />
    </Container>
  );
};

export default Favorites;
