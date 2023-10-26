import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, act, waitFor, screen } from '@testing-library/react';
import Weather from '../components/Weather/Weather';


global.fetch = jest.fn();

describe('Componente Weather', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('se representa en estado de carga', async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ /* datos ficticios aquí */ }) });

    await act(async () => {
      render(<Weather locationId={1} />);
    });

    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('muestra datos de clima después de una llamada exitosa a la API', async () => {
    const mockWeatherData = { /* datos de clima ficticios aquí */ };
    const mockForecastData = { /* datos de pronóstico ficticios aquí */ };

    fetch
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(mockWeatherData) })
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(mockForecastData) });

    await act(async () => {
      render(<Weather locationId={1} />);
    });

    await waitFor(() => {
      expect(screen.getByTestId('weather')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Nombre de la ciudad/)).toBeInTheDocument(); // Reemplaza con la comprobación real de los datos del clima
      expect(screen.getByText(/Temperatura/)).toBeInTheDocument(); // Reemplaza con la comprobación real de los datos del clima
    });
  });

  it('maneja errores de la llamada a la API de manera adecuada', async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    await act(async () => {
      render(<Weather locationId={1} />);
    });

    await waitFor(() => {
      expect(screen.queryByTestId('weather')).not.toBeInTheDocument();
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Error/)).toBeInTheDocument();
    });
  });
});
