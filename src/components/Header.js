import React from 'react'
import Imagelogo from '../assets/img/poke-logo.png'

function Header() {
  return (
    <header className="header">
    <div className="header-bg"></div>
    <img
      className="header-logo"
      src={Imagelogo}
      alt="pokemon-logo"
    />
    <nav className="header-search_bar">
      <input type="text" name="search" placeholder="Search" />
      <button type="submit">GO</button>
    </nav>
  </header>
  )
}

export default Header