import React from 'react'
import Spinner from '../Spinner/Spinner'
import style from './Card.module.css'


const Card = ({ loadingData, showData, weather, forecast }) => {
    //por props la información, clima actual, pronostico, spinner

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    //si loadingData es true q se muestre el spinner
    if( loadingData ){
        return <Spinner />;
    }

    let url = "";
    let iconUrl = "";
    //establecer la url para la predicion del tiempo en cada 3, 6 y 9 horas
    let urlIcon3 = "";
    let urlIcon6 = "";
    let urlIcon9 = "";

    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";

    // solo obtenemos esa informacion del icono
    if(showData){
        url = "http://openweathermap.org/img/w/";
        //aca accedemos a los iconos de openweather
        iconUrl = url + weather.weather[0].icon + ".png"

        urlIcon3 = url + forecast.list[0].weather[0].icon + ".png";
        urlIcon6 = url + forecast.list[1].weather[0].icon + ".png";
        urlIcon9 = url + forecast.list[2].weather[0].icon + ".png";

        forecastDate3 = forecast.list[0].dt_txt.substring(8, 10) + '/' + forecast.list[0].dt_txt.substring(5, 7) + '/' + forecast.list[0].dt_txt.substring(0, 4) + ' ' + forecast.list[0].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13)

    }


  return (
    <div>

        {showData === true ? (
            <div>
                <div className={style.container}>
                    <div className={style.clim}>
                    <h2>{weather.name}</h2>
                    <p>{date}</p>
                    <h1>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                    <p><img src={iconUrl} alt='icon' />{weather.weather[0].main}</p>
                    </div>
                    
                    <div className={style.temp}>
                    <h4>Temp Max: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h4>
                    <h4>Temp Min: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h4>
                    <h4>Thermal sensation: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h4>
                    <h4>Humidity: {weather.main.humidity}%</h4>
                    <h4>Wind speed: {weather.wind.speed}m/s</h4>
                    </div>
                 
                    <div className={style.predict}>
                    <h2>Time Prediction</h2>

                    <p>{forecastDate3}h</p>
                    <p><img src={urlIcon3} alt='icon' />{forecast.list[0].weather[0].main}</p>
                    <p>{(forecast.list[0].main.temp - 273.15).toFixed(1)}°C</p>

                    <p>{forecastDate6}h</p>
                    <p><img src={urlIcon6} alt='icon' />{forecast.list[1].weather[0].main}</p>
                    <p>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>

                    <p>{forecastDate9}h</p>
                    <p><img src={urlIcon9} alt='icon' />{forecast.list[2].weather[0].main}</p>
                    <p>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                    </div>
                    
                </div>

            </div>





        ) : (
            <h2>Sin Datos</h2>
        )


        }




    </div>
  )
}

export default Card