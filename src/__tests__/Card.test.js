import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';

const mockWeather = {
  name: 'City',
  main: {
    temp: 288.15,
    temp_max: 290.15,
    temp_min: 286.15,
    feels_like: 289.15,
    humidity: 60,
  },
  weather: [{ main: 'Clear', icon: '01d' }],
  wind: { speed: 5 },
};

const mockForecast = {
  list: [
    {
      dt_txt: '2023-10-25 12:00:00',
      weather: [{ main: 'Clear', icon: '01d' }],
      main: { temp: 290.15 },
    },
    {
      dt_txt: '2023-10-25 15:00:00',
      weather: [{ main: 'Clear', icon: '01d' }],
      main: { temp: 292.15 },
    },
    {
      dt_txt: '2023-10-25 18:00:00',
      weather: [{ main: 'Clear', icon: '01d' }],
      main: { temp: 288.15 },
    },
  ],
};

describe('Card Component', () => {
  it('should render a spinner when loadingData is true', () => {
    render(<Card loadingData={true} showData={false} />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('should render weather and forecast data when showData is true', () => {
    render(
      <Card loadingData={false} showData={true} weather={mockWeather} forecast={mockForecast} />
    );
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('25/10/2023')).toBeInTheDocument();

    const temperatureElements = screen.getAllByText('15.0°C');
    expect(temperatureElements[0]).toBeInTheDocument();
    
  });
});
