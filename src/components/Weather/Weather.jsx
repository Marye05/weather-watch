import React, { useState } from 'react'
import { API_KEY } from '../../config';
import Form from '../Form/Form'
import Card from '../Card/Card';


const Weather = () => {
  const apiKey = API_KEY;
//url tiempo actual, al final de la url se coloco lang para utilizar el lenguaje español
 let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lang=es&q=`;
 //url para la prediccion de las siguientes horas
  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&lang=es&q=`;

  //almacenar la respuesta de la api con el tiempo actual con array vacio, allí estará la info
  const [ weather, setWeather ] = useState([]);
  //almacenar la prediccion de las siguientes horas
  const [ forecast, setForecast ] = useState([]);
  //utilizamos un spiner mientras se carga nuestra informacion, se muestre el spiner, saber q esta trabajando
  const [ loading, setLoading ] = useState(false);
  //para visualizar la tarjeta con la informacion
  const [ show, setShow ] = useState(false);
  //otro estado para que se pueda comunicar con el formulario
  const [ location, setLocation ] = useState("");

  //función llamada a la api, le pasamos como parametro esa ciudad
  const fetchData = async(loc) => {
    setLoading(true); //acá activamos el spinner, mientras la información carga
    setLocation(loc); // acá establecemos la ubicación
//concatenamos la url
  const urlWeatherWithLoc = `${urlWeather}${loc}` ; 
  const urlForecastWithLoc = `${urlForecast}${loc}`;
  try {
    const responseWeather = await fetch(urlWeatherWithLoc); //realizo la solicitud a la api clima actual
    const responseForecast = await fetch(urlForecastWithLoc); //solicitud a la api, pronostico prox horas
    if(!responseWeather.ok || !responseForecast.ok){//si la respuesta es distinto de ok, error
      throw new Error('response was not ok')
    }
    const dataWeather = await responseWeather.json(); //convertir la respuesta en json
    const dataForecast = await responseForecast.json();
    console.log(dataForecast)
    console.log(dataWeather);
 
      setWeather(dataWeather); //almacena datos de clima actual
      setForecast(dataForecast); //almacena los datos de pronosticos
      setShow(true); //muestra la información
      setLoading(false); //desactivo el spinner cuando muestre los datos del clima
    
  } catch (error) {
    console.log(error); //muestra error en consola
    setLoading(false); //en caso de error desactivo el spinner
    setShow(false); //no muestres datos en caso de error
  }
};
   
//retornamos para visualizar la informacion
  return(
    <div>
    
    <Form
    //este prop es una funcion q tiene un parametro obtener el llamado a la api
    newLocation = {fetchData}
    />

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