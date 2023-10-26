import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App renders without errors', () => {
  render(<App />);
});

test('App contains NavBar', () => {
  render(<App />);
  const navBarElement = screen.getByTestId('navbar');
  expect(navBarElement).toBeInTheDocument();
});

test('App contains Weather component', () => {
  render(<App />);
  const weatherElement = screen.getByTestId('weather');
  expect(weatherElement).toBeInTheDocument();
});

test('App contains Search component', () => {
  render(<App />);
  const searchElement = screen.getByTestId('search');
  expect(searchElement).toBeInTheDocument();
});




