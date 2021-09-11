import React from 'react';
import './GamesPage.css'
import GameList from '../../components/gameList/GameList'
import SearchBar from '../../components/searchBar/SearchBar'

function GamesPage() {
  return (
      <div className="rootDiv">
        <div className="container">
          <div className="centralize">
            <span className="title">Todos os jogos</span>
            <SearchBar></SearchBar>
          </div>
          <div className="list-area">
            <GameList></GameList>
          </div>
        </div>
      </div> 
    ) ;
  
}

export default GamesPage;