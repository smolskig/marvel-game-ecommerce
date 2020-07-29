import React from 'react';
import { Link } from 'react-router-dom'
import GameCarousel from '../../components/gameCarousel/GameCarousel'

import './HomePage.css'
import marvelIcon from '../../assets/marvel-icon.svg'

const HomePage = () => (
  <div className="rootDiv">
    <div className="container">
      <header className="icon-area">
        <img className="marvel-icon" src={marvelIcon} alt="marvel-icon"/>
      </header>
      <section className="central-section">
        <span className="title-text">The most complete games marketplace, from the one of the greatest comics company in the world</span>
        <Link to="/games" className="marvel-btn">Todos os Jogos</Link>
      </section>
      <main className="spotlight-area">
        <span>Destaques</span>
        <GameCarousel></GameCarousel>
      </main>
    </div>
  </div>
)

export default HomePage;