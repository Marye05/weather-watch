import React, { useState } from 'react'
import style from './Form.module.css'

const Form = ({newLocation}) => {
    const [city, setCity ] = useState(""); //establecemos la ciudad a buscar

    const onSubmit = (event) => {
        event.preventDefault();//por defecto que no se recargue la pagina
        console.log({city});
        if(city === "" || !city ) return;

        newLocation(city);//la ciudad que hemos incluido en nuestro campo de entrada
    }
//onchange para poder obtener la informacion, que se ejecute cuando le demos al botón
  return (
    <div>
        <form onSubmit={onSubmit}>

            <input className={style.search} type='text' placeholder='city' 
            onChange={(event) => setCity(event.target.value)} />
            <button className={style.btn} type='submit'>Search</button>

        </form>
    </div>
  )
}

export default Form