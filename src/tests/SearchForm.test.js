import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from '../components/SearchForm';


const mockOnSearch = jest.fn();

test('renders SearchForm component correctly', () => {
  render(
    <BrowserRouter>
      <SearchForm onSearch={mockOnSearch} />
    </BrowserRouter>
  );
  expect(screen.getByPlaceholderText('Enter search term')).toBeInTheDocument();
});

test('calls onSearch when form is submitted', () => {
  render(
    <BrowserRouter>
      <SearchForm onSearch={mockOnSearch} />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText('Enter search term'), { target: { value: 'test' } });
  fireEvent.click(screen.getByText('Search'));
  expect(mockOnSearch).toHaveBeenCalled();
});
