import React from "react";

import Loader from "react-loader-spinner";
import "./GameCarousel.css";

import { useSelector, useDispatch } from "react-redux";
import { getGames,selectGame } from "../../slices/games/gamesSlice";
import { getUi,toggleModal } from "../../slices/ui/uiSlice";

const GameCarousel = () => {
  const dispatch = useDispatch() // hook para dar executar o dispatch das actions
  const games = useSelector(getGames); // hook para pegar o state com todos os jogos
  const ui = useSelector(getUi);

  const pickGame = async (gameInfo) =>{
    dispatch(selectGame({item:gameInfo}))
    await dispatch(toggleModal({ modalOpen:true }))
  }
  const showGames = () => {
    if (games.items.length > 0 && ui.loading === false) {
      return (
        <>
          <div className="game-item">
            <div className="item-content" onClick={()=> pickGame(games.items[3])}>
              <img
                className="gameImg"
                src={`https://terrigen-cdn-dev.marvel.com/content/prod/1x/${games.items[3].image.filename}`}
                alt="game-img"
              />
            </div>
          </div>
          <div className="game-item">
            <div className="item-content" onClick={()=> pickGame(games.items[5])}>
              <img
                className="gameImg"
                src={`https://terrigen-cdn-dev.marvel.com/content/prod/1x/${games.items[5].image.filename}`}
                alt="game-img"
              />
            </div>
          </div>
          <div className="game-item">
            <div className="item-content" onClick={()=> pickGame(games.items[15])}>
              <img
                className="gameImg"
                src={`https://terrigen-cdn-dev.marvel.com/content/prod/1x/${games.items[15].image.filename}`}
                alt="game-img"
              />
            </div>
          </div>
        </>
      );
    } else if (games.items.length === 0 && ui.loading === false) {

      return <div className="center">Não há jogos para serem exibidos</div>;

    } else {

      return (
        <div className="center">
          <Loader
            type="Oval"
            color="#F0141E"
            height={100}
            width={100}
          />
        </div>
      );
    }
  };

  return <div className="gameWrapper">{ showGames() }</div>;
};

export default GameCarousel;
