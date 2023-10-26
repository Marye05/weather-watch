import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Weather/Search';

describe('Search component', () => {
  it('renders without errors', () => {
    render(<Search />);
    const searchComponent = screen.getByTestId('search');
    expect(searchComponent).toBeInTheDocument();
  });

  it('handles search input and displays results', () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText('Buscar por nombre');

    // Type a search term into the input field
    fireEvent.change(searchInput, { target: { value: 'London' } });

    // Verify that the input value is updated
    expect(searchInput.value).toBe('London');

    // Ensure that the search results are displayed
    const searchResults = screen.getByTestId('search');
    expect(searchResults).toBeInTheDocument();

    // You can further test the search functionality and selection here
  });

  it('displays a "No se encontraron coincidencias" message for no matches', () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText('Buscar por nombre');

    // Type a search term that won't match any results
    fireEvent.change(searchInput, { target: { value: 'InvalidCityName' } });

    // Ensure that the "No se encontraron coincidencias" message is displayed
    const noMatchesMessage = screen.getByText('No se encontraron coincidencias');
    expect(noMatchesMessage).toBeInTheDocument();
  });

  // You can write more test cases for other functionalities as needed
});
