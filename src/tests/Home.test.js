import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';


const mockFavorites = [
  { trackId: 1, trackName: 'Favorite 1' },
  { trackId: 2, trackName: 'Favorite 2' },
];

const mockOnFavorite = jest.fn();
const mockOnRemoveFavorite = jest.fn();

test('renders Home component correctly', () => {
  render(
    <BrowserRouter>
      <Home favorites={mockFavorites} onFavorite={mockOnFavorite} onRemoveFavorite={mockOnRemoveFavorite} />
    </BrowserRouter>
  );
  expect(screen.getByText('Favorite 1')).toBeInTheDocument();
  expect(screen.getByText('Favorite 2')).toBeInTheDocument();
});
