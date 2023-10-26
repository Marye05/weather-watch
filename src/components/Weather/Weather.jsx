import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../config';
import Card from '../Card/Card';


const Weather = ({locationId }) => {
  const apiKey = API_KEY;
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lang=es&id=`;
  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&lang=es&id=`;

  const [ weather, setWeather ] = useState([]); //almacena respuesta api del clima actual
  const [ forecast, setForecast ] = useState([]);//almacenar la prediccion de las siguientes horas
  const [ loading, setLoading ] = useState(false);//utilizamos un spiner mientras se carga nuestra informacion
  const [ show, setShow ] = useState(false);//para visualizar la tarjeta con la informacion

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true); 
      const urlWeatherWithLoc = `${urlWeather}${locationId}` ; //locationID
      const urlForecastWithLoc = `${urlForecast}${locationId}`;
      try {
        const responseWeather = await fetch(urlWeatherWithLoc); //realizo la solicitud a la api clima actual
        const responseForecast = await fetch(urlForecastWithLoc); //solicitud a la api, pronostico prox horas
        if(!responseWeather.ok || !responseForecast.ok){//si la respuesta es distinto de ok, error
          throw new Error('response was not ok')
        }
        const dataWeather = await responseWeather.json(); //convertir la respuesta en json
        const dataForecast = await responseForecast.json();
  
        setWeather(dataWeather); //almacena datos de clima actual
        setForecast(dataForecast); //almacena los datos de pronosticos
        setShow(true); //muestra la información
        setLoading(false); //desactivo el spinner cuando muestre los datos del clima
      } catch (error) {
        setLoading(false); //en caso de error desactivo el spinner
        setShow(false); //no muestres datos en caso de error
      }
    };
    fetchData();
  }, [locationId, urlForecast, urlWeather])
   
  return(
    <div data-testid="weather">
    <Card
    showData = {show}
    loadingData = {loading}
    weather = {weather}
    forecast = {forecast}
    />
    
    </div>
  )
}

export default Weather