import React from "react";

import '../style/Header.css';


const Header = () => (
  <header className='header'>
    <div className='header-left'>
      <div className='img-wrapper'>
        <img className='img' src={require("../Photo.png")} alt="img"/>
      </div>
    </div>
    <div className='header-right'>
      <h1 className="title">Вероника Ростова</h1>
      <h2 className='subtitle'>Менеджер по продажам</h2>
      <p className='description'>Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>
    </div>
  </header>
);

export default Header;