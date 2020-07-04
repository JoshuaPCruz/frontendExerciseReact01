import React from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img className="logo" src="https://i.ibb.co/KyPGcZh/logoNYT.jpg" alt="logoNYT" />
        <div className="navbar">
          <h3 className="reset-style">Contenido de subcabecera</h3>
        </div>
      </div>
    </header>
  )
}

export default Header;