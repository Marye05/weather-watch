import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Weather from '../components/Weather/Weather';

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({  }),
    })
  );
});

afterAll(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe('Weather Component', () => {
  it('renders without errors', () => {
    render(<Weather locationId="your-location-id" />);
  });

  it('displays loading spinner initially', () => {
    render(<Weather locationId="your-location-id" />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('fetches and displays weather data', async () => {

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({  }),
      })
    );

    render(<Weather locationId="your-location-id" />);

    await waitFor(() => {
      const spinner = screen.queryByTestId('loading-spinner');
      expect(spinner).toBeNull();

      const weatherData = screen.getByTestId('weather-data');
      expect(weatherData).toBeInTheDocument();
    });
  });

  it('handles API fetch error', async () => {
    global.fetch.mockImplementationOnce(() => Promise.resolve({ ok: false }));

    render(<Weather locationId="your-location-id" />);

    await waitFor(() => {
      const spinner = screen.queryByTestId('loading-spinner');
      expect(spinner).toBeNull();

      const weatherData = screen.queryByTestId('weather-data');
      expect(weatherData).toBeNull();
    });
  });
});
