import React from 'react';
import HeaderNav from './components/HeaderNav';
//import './javascript/ThemeSelector.js'
import Layout from './components/Layout';
import Footer from './components/Footer';

function CardGame() {
  return (
    <div className="card-game">
      <HeaderNav></HeaderNav>
      <Layout></Layout>
      <Footer></Footer>
    </div>
  );
}

export default CardGame;
