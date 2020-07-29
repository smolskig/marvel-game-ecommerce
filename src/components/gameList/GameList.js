import React from 'react';

import './GameList.css'

import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { getGames,selectGame } from "../../slices/games/gamesSlice";
import { getUi,toggleModal } from "../../slices/ui/uiSlice";

function GameList() {
    const dispatch = useDispatch() // hook para dar executar o dispatch das actions
    const games = useSelector(getGames); // hook para pegar o state com todos os jogos
    const ui = useSelector(getUi);

    const pickGame = async (gameInfo) =>{
        await dispatch(selectGame({item:gameInfo}))
        await dispatch(toggleModal({ modalOpen:true }))
    }

function generateGameList(){
    if(games.filteredItems.length > 0 && ui.loading === false){
        return (
            games.filteredItems.map(game=>{
                return (
                    <div key={game.created} className="game-item">
                        <div className="item-content" onClick={()=> pickGame(game)}>
                            <img
                                className="gameImg"
                                src={`https://terrigen-cdn-dev.marvel.com/content/prod/1x/${game.image.filename}`}
                                alt="game-img"
                            />
                        </div>
                        <span>{game.headline}</span>
                    </div>
                )
            })
        )
    }
    else if(games.filteredItems.length === 0 && ui.loading === false){
        return <div className="center">Não há jogos para serem exibidos</div>;
    }
    else{
        return(
            <div className="center">
            <Loader
                type="Oval"
                color="#F0141E"
                height={100}
                width={100}
            />
            </div>
        )
    }
}
  return (
      <div className="list-wrapper">
          { generateGameList() }
      </div>
  );
}

export default GameList;