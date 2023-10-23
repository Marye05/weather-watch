import Card from '../components/Card/Card';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner/Spinner'

describe('Card Component', () => {
  it('renders the spinner when loadingData is true', () => {
    render(<Card loadingData={true} showData={false} />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeTruthy();
  });

  it('renders weather information when showData is true', () => {
    const weatherData = {
      name: 'City',
      main: {
        temp: 298.15, 
        temp_max: 303.15,
        temp_min: 293.15,
        feels_like: 298.15,
        humidity: 50,
      },
      weather: [
        {
          icon: '01d', // Icon code
          main: 'Clear',
        },
      ],
      wind: {
        speed: 3.5,
      },
    };

    const forecastData = {
      list: [
        {
          dt_txt: '2023-10-22 12:00:00',
          main: {
            temp: 298.15, 
          },
          weather: [
            {
              icon: '02d', 
              main: 'Clouds',
            },
          ],
        },
      ],
    };

    render(
      <Card
        loadingData={false}
        showData={true}
        weather={weatherData}
        forecast={forecastData}
      />
    );

    const card = screen.getByRole('card'); 
    const clim = screen.getAllByRole('clim'); 

    expect(card).toBeTruthy();
    expect(clim).toHaveLength(3); 
  });
});
