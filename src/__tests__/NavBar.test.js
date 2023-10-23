import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/NavBar/NavBar';

test('Renderiza el componente NavBar correctamente', () => {
  render(<NavBar />);
  const titleElement = screen.getByText('Weather Watch');
  expect(titleElement).toBeInTheDocument();

  const navElement = screen.getByRole('navigation');
  expect(navElement).toHaveClass('nav');
});

test('El componente NavBar contiene un elemento h1', () => {
  render(<NavBar />);
  
  const h1Element = screen.getByRole('heading', { name: /Weather Watch/i });
  expect(h1Element).toBeInTheDocument();
});