import React from 'react'
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar'
import Weather from './components/Weather/Weather'
import Search from './components/Weather/Search'

function App() {
  return (
    <div className={style.app}>
      <NavBar />
      <Weather />
      <Search />
    </div>
  );
}

export default App;
