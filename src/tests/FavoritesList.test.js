import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FavoritesList from '../components/FavoritesList';


const mockFavorites = [
  { trackId: 1, trackName: 'Favorite 1' },
  { trackId: 2, trackName: 'Favorite 2' },
];

const mockRemoveFavorite = jest.fn();

test('renders FavoritesList component correctly', () => {
  render(
    <BrowserRouter>
      <FavoritesList favorites={mockFavorites} onRemoveFavorite={mockRemoveFavorite} />
    </BrowserRouter>
  );
  expect(screen.getByText('Favorite 1')).toBeInTheDocument();
  expect(screen.getByText('Favorite 2')).toBeInTheDocument();
});
