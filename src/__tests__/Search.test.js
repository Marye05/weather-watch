import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../src/components/Weather/Search';

describe('Search Component', () => {
    it('renders the component correctly', () => {
      render(<Search />);
      const inputElement = screen.getByPlaceholderText('Buscar por nombre');
      const noMatchesMessage = screen.getByText('No se encontraron coincidencias');
  
      expect(inputElement).toBeInTheDocument();
      expect(noMatchesMessage).toBeInTheDocument();
    });
  
    it('displays results when a valid search term is entered', () => {
      render(<Search />);
      const inputElement = screen.getByPlaceholderText('Buscar por nombre');
  
      fireEvent.change(inputElement, { target: { value: 'Municipio' } });
  
      const resultElement = screen.getByText('Municipio Guacara (VE)');
      expect(resultElement).toBeInTheDocument();
    });
  
    it('does not display results when the search term is too short', () => {
      render(<Search />);
      const inputElement = screen.getByPlaceholderText('Buscar por nombre');
  
      fireEvent.change(inputElement, { target: { value: 'Mu' } });
  
      const resultElement = screen.queryByText('Municipio Guacara (VE)');
      expect(resultElement).toBeNull();
    });
  });
  