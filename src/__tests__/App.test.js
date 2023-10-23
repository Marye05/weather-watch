import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText('NavBar')).toBeInTheDocument();

  expect(screen.getByText('Weather')).toBeInTheDocument();

  expect(screen.getByText('Search')).toBeInTheDocument();
});


