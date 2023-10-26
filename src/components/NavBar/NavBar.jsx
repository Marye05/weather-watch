import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
        <div data-testid="navbar" className={style.nav}>
            <h1>Weather Watch</h1>
        </div>   
    </nav>
  )
}

export default NavBar