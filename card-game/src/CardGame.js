import React from 'react';
import HeaderNav from './components/HeaderNav';
import Layout from './components/Layout';
import './CardGame.css';

function CardGame() {
  return (
    <div className="card-game">
      <HeaderNav></HeaderNav>
      <Layout></Layout>
    </div>
  );
}

export default CardGame;
