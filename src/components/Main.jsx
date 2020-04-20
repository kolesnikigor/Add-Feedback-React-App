import React from 'react';

import '../style/Main.css';

const Main = () => (
  <main className='main'>
    <h2 className='title'>Услуг</h2>
    <div className='list'>
      <div className='list-item'>
        <div className='background-value width-80 green'></div>
        <div className='desc-left'>Ручное бронирование</div>
        <div className="desc-right">11</div>
      </div>
      <div className='list-item'>
        <div className='background-value width-20 blue'></div>
        <div className='desc-left'>Пакетные туры</div>
        <div className="desc-right">3</div>
      </div>
      <div className='list-item'>
        <div className='background-value width-15 blue'></div>
        <div className='desc-left'>Отели</div>
        <div className="desc-right">1</div>
      </div>
    </div>
    <div className='item-bottom'>
      <div className='desc-left fz-16 fw-bold'>Всего</div>
      <div className="desc-right fz-16 fw-bold">15</div>
    </div>
  </main>
);

export default Main;