import React from 'react';
import './GamesPage.css'
import GameList from '../../components/gameList/GameList'
import SearchBar from '../../components/searchBar/SearchBar'
// games.items.map(game =>{
//   return <div className="carousel-item">
//               <div className="item-content">
//                   <img className="gameImg" src={`https://terrigen-cdn-dev.marvel.com/content/prod/1x/${game.image.filename}`} alt="game-img"/>
//               </div>
//           </div>
// })
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