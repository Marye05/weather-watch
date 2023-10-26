import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

test('NavBar renders correctly', () => {
  render(<NavBar />);
  const navbarElement = screen.getByTestId('navbar');

  expect(navbarElement).toBeInTheDocument();
  expect(navbarElement).toHaveTextContent('Weather Watch');
});
